import { Typography } from "@mui/material";
import style from "../Styles/formlist.module.css";
import AddContact from "./AddContact";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import useSWR from "swr";
import React from "react";
import CardList from "./Card";
import Buttons from "./Buttons";
import { toast } from "react-toastify";


const ContactList = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060",
    fetcher
  );

  const [contacts, setContacts] = React.useState([]);
  const [value, setValue] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    language: "",
    birthday: "",
  });

  const ref = React.useRef(null);

  React.useEffect(() => {
    if (data) {
      setContacts(data);
    }
  }, [data]);

  const updateContactList = (value) => {
    if (value.name?.trim() === "" || value.number?.trim() === "") {
      toast.error('You can not keep empty form when updating contact!', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return;
    }
    const updateContact = contacts.map((contact) => {
      if (contact.id === value.id) {
        contact = value;
      }
      return contact;
    });
    setContacts(updateContact);
    toast.info('Update contact!', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

  const editContact = (contact) => {
    ref.current.click();
    setValue(contact);
  };

  const onChangeEdit = (e) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleEditOnClick = (e) => {
    e.preventDefault();
    updateContactList(value);
  };

  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
    localStorage.setItem("contacts", JSON.stringify([...contacts, newContact]));
  };

  const handleRemove = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
    toast.info('Contact deleted!', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

 
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <button
        ref={(node) => (ref.current = node)}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      ></button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content bg-info">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Contact
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    defaultValue={value.firstName}
                    className="form-control"
                    placeholder="Edit Your Name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={onChangeEdit}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    defaultValue={value.lastName}
                    className="form-control"
                    placeholder="Edit Name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={onChangeEdit}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={value.email}
                    className="form-control"
                    placeholder="Edit Your Email"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={onChangeEdit}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Gender
                  </label>
                  <input
                    type="text"
                    name="gender"
                    defaultValue={value.gender}
                    className="form-control"
                    placeholder="Edit Gender"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={onChangeEdit}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Language
                  </label>
                  <input
                    type="text"
                    name="language"
                    defaultValue={value.language}
                    className="form-control"
                    placeholder="Edit Your Language"
                    id="exampleInputLanguage"
                    aria-describedby="emailHelp"
                    onChange={onChangeEdit}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Birthday
                  </label>
                  <input
                    type="text"
                    name="birthday"
                    defaultValue={value.birthday}
                    className="form-control"
                    placeholder="Edit Your birthday"
                    id="exampleInputBirthday1"
                    aria-describedby="birthdaylHelp"
                    onChange={onChangeEdit}
                  />
                </div>

                <div className="mb-3 form-check"></div>
              </div>
            </form>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={handleEditOnClick}
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <AddContact addContact={handleAddContact} />
        <Card className={style.cardContainer}>
          <CardContent className={style.cardContent}>
            <Typography gutterBottom variant="h5" component="div">
              Contact List
            </Typography>
            <Buttons 
              menuItems={contacts}
             />
            <CardList contacts={contacts} editContact={editContact} handleRemove={handleRemove} />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ContactList;


