import { Modal, AutoComplete, DatePicker, Form, Input, Radio, Button, Row, Col, Popconfirm, InputNumber } from "antd";
import { DeleteOutlined } from '@ant-design/icons';
import dayjs from "dayjs";

export function ModalForm(props) {
  const { form, open, onFinish, closeModal, onDelete, editing, setEditing } = props;
  return (
    <>
      <Modal
        title={
          form.getFieldValue("id") ?
            <div style={{ textAlign: "center" }}>Edit <span style={{ color: "#00906d" }}>Leste Contact</span></div>
            :
            <div style={{ textAlign: "center" }}>New <span style={{ color: "#00906d" }}>Leste Contact</span></div>
        }
        centered
        open={open}
        closeIcon={false}
        onCancel={closeModal}
        footer={null}
        forceRender={true}
      >
        <Form
          form={form}
          size="small"
          onFinish={onFinish}
          initialValues={form.getFieldValue("id") ? form.getFieldsValue : null}
          onChange={setEditing}
        >
          <Form.Item
            label={"First Name"}
            name={"first_name"}
            rules={[{ required: true, message: "Please type your first name!" }]}
          >
            <AutoComplete />
          </Form.Item>
          <Form.Item
            label={"Last Name"}
            name={"last_name"}
            rules={[{ required: true, message: "Please type your last name!" }]}
          >
            <AutoComplete />
          </Form.Item>
          <Form.Item
            label={"Email"}
            name={"email"}
            rules={[{ required: true, message: "Please type your email!" }]}
          >
            <AutoComplete />
          </Form.Item>
          <Form.Item
            label={"Gender"}
            name={"gender"}
            rules={[{ required: true, message: "Please select a gender!" }]}
            htmlFor={"Female"}
          >
            <Radio.Group>
              <Radio id={"Female"} value={"F"}>Female</Radio>
              <Radio id={"Male"} value={"M"}>Male</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label={"Language"}
            name={"language"}
            rules={[{ required: true, message: "Please put your language!" }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label={"Avatar URL"}
            name={"avatar"}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={"Birthday"}
            name={"birthday"}
            rules={[{ required: true, message: "Please select a date!" }]}
          >
            <DatePicker
              disabledDate={(current) => current.isAfter(dayjs())}
              format='DD/MM/YYYY'
              placeholder='Select a date'
              onChange={editing ? null : setEditing}
            />
          </Form.Item>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              {form.getFieldValue("id") ? (
                <>
                  <Form.Item
                    name={"id"}
                    hidden>
                    <InputNumber value={form.getFieldValue("id")} />
                  </Form.Item>
                  <Popconfirm
                    title="Are you sure to delete this Leste Contact?"
                    onConfirm={onDelete}
                    placement="topLeft"
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button
                      type={"text"}
                      size="middle"
                      style={{ backgroundColor: "#d85757" }}
                    >
                      <DeleteOutlined style={{ display: "flex", alignItems: "start", color: "#fff" }} />
                    </Button>
                  </Popconfirm>
                </>

              )
                : ""}
            </div>
            <Row gutter={16}>
              <Col span={12}>
                <Button size="middle" onClick={closeModal}>Cancel</Button>
              </Col>
              <Col span={12}>
                <Button
                  size="middle"
                  type={"primary"}
                  htmlType='submit'
                  disabled={!editing}
                >
                  {form.getFieldValue("id") ? "Update" : "Add"}
                </Button>
              </Col>
            </Row>
          </div>
        </Form>
      </Modal >
    </>
  );
}
