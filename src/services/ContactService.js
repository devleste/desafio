import axios from "axios";

const API_URL = "https://janbarbozaapi-ec0d86d1aa00.herokuapp.com/api/contacts";

export const getAllContacts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

export const getContactById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching contact with ID ${id}:`, error);
    throw error;
  }
};

export const addContact = async (newContact) => {
  try {
    const response = await axios.post(API_URL, newContact);
    return response.data;
  } catch (error) {
    console.error('Error adding contact:', error);
    throw error;
  }
};

export const updateContact = async (updatedContact) => {
  try {
    const response = await axios.put(`${API_URL}/${updatedContact.id}`, updatedContact);
    return response.data;
  } catch (error) {
    console.error(`Error updating contact with ID ${updatedContact.id}:`, error);
    throw error;
  }
};

export const deleteContact = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting contact with ID ${id}:`, error);
    throw error;
  }
};