// src/components/ContactCard.js
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Avatar,
  IconButton,
  Tooltip,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function ContactCard({ contact, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContact, setEditedContact] = useState({ ...contact });

  // Resto do código do ContactCard
}

export default ContactCard;
