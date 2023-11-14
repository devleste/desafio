import { useState, useEffect } from 'react';
import { deleteContact, getAllContacts } from '../../services/ContactService';
import dayjs from "dayjs";
import { Avatar, Flex, FloatButton, Form, Table, message } from 'antd';
import { NewContact } from './NewContact';
import { Statistics } from './Statistics';
import { useMediaQuery } from 'react-responsive'
import { fromPayload, toPayload } from './mapper';
import { ModalForm } from './ModalForm';

export function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  useEffect(() => {
    getContacts();
  }, []);

  async function getContacts() {
    try {
      const data = await getAllContacts();
      setContacts(data);
    } catch (error) {
      console.log(error);
    }
  }

  function successMensage(message) {
    messageApi.open({
      type: 'success',
      content: message,
    });
    getContacts()
  };

  function errorMensage(message) {
    messageApi.open({
      type: 'error',
      content: message,
    });
    getContacts()
  };

  async function deleteItem(contactId) {
    try {
      await deleteContact(contactId);
      successMensage("Deleted successfully!");
      getContacts();
    } catch (error) {
      console.log(error);
      errorMensage("Error deleting contact!");
    }
  }

  async function updateList(data) {
    if (data.id) {
      successMensage("Updated successfully!");
    } else {
      successMensage("Created successfully!");
    }
    getContacts();
  }

  const columns = [
    {
      align: "center",
      width: 50,
      dataIndex: ['avatar'],
    },
    {
      title: 'Name',
      width: 200,
      dataIndex: ['name'],
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      sorter: (a, b) => a.age - b.age,
      filters: [...new Set(contacts?.map(contato => dayjs().diff(contato.birthday, 'years')))].sort()
        .map((age) => {
          return {
            text: age,
            value: age
          }
        }),
      onFilter: (value, record) => record.age === value,
    },
    {
      title: 'Gender',
      width: 80,
      dataIndex: 'gender',
      sorter: (a, b) => a.gender.localeCompare(b.gender),
      filters: [
        {
          text: 'Male',
          value: 'M',
        },
        {
          text: 'Female',
          value: 'F',
        },
      ],
      onFilter: (value, record) => record.gender.startsWith(value),
    },
    {
      title: 'Language',
      dataIndex: 'language',
      width: 140,
      sorter: (a, b) => a.language.localeCompare(b.language),
      filters: [...new Set(contacts?.map(contato => contato.language))].sort()
        .map((language) => {
          return {
            text: language,
            value: language
          }
        }),
      onFilter: (value, record) => record.language.startsWith(value),
      filterSearch: true,
    },
    {
      title: 'Birthday',
      dataIndex: 'birthday',
      sorter: (a, b) => a.birthday.localeCompare(b.birthday),
      filters: dayjs.months().map((month, index) => {
        return {
          text: month,
          value: index + 1
        }
      }),
      onFilter: (value, record) => dayjs(record.birthday).format('MM').startsWith(value),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
  ];

  const contactList = contacts?.map((contact) => {
    return {
      key: contact.id,
      avatar: contact.avatar ? <Avatar src={contact.avatar} /> : <Avatar style={{ backgroundColor: "#00996d" }}>{contact.first_name[0] + contact.last_name[0]}</Avatar>,
      name: contact.first_name + " " + contact.last_name,
      age: dayjs().diff(contact.birthday, 'years'),
      email: contact.email,
      gender: contact.gender,
      language: contact.language,
      birthday: dayjs(contact.birthday).format('DD MMMM YYYY'),

    }
  });

  function openEdit(e) {
    const mapped = fromPayload(e);
    form.setFieldsValue(mapped);
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
    setEditing(false);
    form.resetFields();
  }
  function onFinish(e) {
    closeModal();
    const updatedData = toPayload(e);
    updateList(updatedData);
  }
  function onDelete() {
    const contactId = form.getFieldValue("id");
    deleteItem(contactId);
    closeModal();
  }

  return (
    <>
      {contextHolder}
      <Flex
        align='center'
        justify='flex-end'
        gap={8}
        style={{ padding: "8px 8px", height: isMobile ? 0 : '' }}
      >
        {isMobile ?
          <FloatButton.Group>
            <Statistics
              contactList={contacts}
              isMobile={isMobile} />
            <NewContact
              updateList={updateList}
              isMobile={isMobile}
            />
          </FloatButton.Group>
          :
          <>
            <Statistics
              contactList={contacts}
              isMobile={isMobile} />
            <NewContact
              updateList={updateList}
              isMobile={isMobile}
            />
          </>
        }
      </Flex>
      <Table
        size="small"
        showSorterTooltip={false}
        columns={columns}
        loading={!contacts}
        dataSource={contactList}
        pagination={isMobile ? false : {
          pageSize: 10
        }}
        scroll={isMobile ? {x: 100} : null}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => openEdit(contacts.find((contact) => contact.id === record.key))
          };
        }}
      />
      <ModalForm
        form={form}
        open={open}
        closeModal={closeModal}
        onFinish={onFinish}
        editing={editing}
        setEditing={setEditing}
        deleteItem={deleteItem}
        onDelete={onDelete}
        updateList={updateList}
      />
    </>
  );
}
