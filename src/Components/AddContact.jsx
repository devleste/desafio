import { Send } from "lucide-react";
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { toast } from "react-toastify";
import InputLabel from "@mui/material/InputLabel";
import PropTypes from 'prop-types';
import style from "../Styles/add-contact.module.css";
import React from "react";

const AddContact = ({ addContact }) => {
  AddContact.propTypes = {
    addContact: PropTypes.func.isRequired, 
  };


  const [gender, setGender] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [language, setLanguage] = React.useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = { firstName, lastName, email, language, gender };

    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    localStorage.setItem("contacts", JSON.stringify([...contacts, contact]));

    addContact(contact);
    setFirstName("");
    setLastName("");
    setEmail("");
    setLanguage("");
    setGender("");

    toast.success('✨ Contact added successfully!', {
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

  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>Add contact</h1>
      </div>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.form_row}>
          <div className={style.input}>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <div className="underline"></div>
            <label form="">First Name</label>
          </div>
          <div className={style.input}>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <div className="underline"></div>
            <label form="">Last Name</label>
          </div>
        </div>
        <div className={style.form_row}>
          <div className={style.input}>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="underline"></div>
            <label form="">Email</label>
          </div>
          <div className={style.input}>
            <input
              type="text"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              required
            />
            <div className="underline"></div>
            <label form="">Language</label>
          </div>
        </div>
        <div className={style.form_row}>
          <InputLabel className={style.input} id="gender-select">
            Gender
          </InputLabel>
          <Select
            className={style.input}
            labelId="gender-select"
            id="simple-select"
            value={gender}
            label="Gender"
            onChange={handleChange}
          >
            <MenuItem value="M">M</MenuItem>
            <MenuItem value="F">F</MenuItem>
          </Select>
        </div>

        <Button variant="contained" type="submit" endIcon={<Send />}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddContact;
