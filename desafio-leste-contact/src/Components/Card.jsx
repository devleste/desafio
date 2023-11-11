import {
  Avatar,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import style from "../Styles/formlist.module.css";
import PropTypes from "prop-types";

export default function CardList({ contacts, editContact, handleRemove }) {
  CardList.propTypes = {
    contacts: PropTypes.array.isRequired,
    editContact: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired,
  };
  return (
    <div className="card-deck">
      {contacts &&
        contacts.map((contact) => (
          <Card key={contact.id} className={style.cardContainer}>
            <div className={style.cardContentWrapper}>
              <Chip
                className={style.chip}
                avatar={
                  <Avatar alt={contact.first_name} src={contact.avatar} />
                }
                label={contact.first_name}
                variant="outlined"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Name: {contact.first_name} {contact.last_name}
                </Typography>

                <Divider />
                <div className={style.contactInfo}>
                  <p>
                    Email: <span>{contact.email}</span>
                  </p>
                  <p>
                    Gender: <span>{contact.gender}</span>
                  </p>
                  <p>
                    Language: <span>{contact.language}</span>
                  </p>
                  <strong>✨ {contact.birthday}</strong>
                </div>
                <Button
                  className={style.editButton}
                  onClick={() => editContact(contact)}
                >
                  Edit
                </Button>
                <Button
                  className={style.editButton}
                  onClick={() => handleRemove(contact.id)}
                >
                  Delete
                </Button>
              </CardContent>
            </div>
          </Card>
        ))}
    </div>
  );
}
