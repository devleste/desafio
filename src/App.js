import React, {useState, useEffect} from 'react';
import './App.css'
import AddContact from './Components/AddContact'
import api from './api'
import ItemList from './Components/ItemList'
import Modal from './Components/Modal';
import EditContact from './Components/EditContact';
import Filter from './Components/FIlter';
import Resume from './Components/Resume';

function App() {

  const [contact, setContact] = useState([])
  const [showEdit, setShowEdit] = useState(false)
  const [showAdd, setShowAdd] = useState(false)
  const [toEdit, setToEdit] = useState()
  const [visible, setVisible] = useState([])
  
  const [myContacts, setMyContacts] = useState([])

  useEffect(() => {
    
    getContact()

  }, [])


  const getContact = async () => {
    const myRes = JSON.parse(localStorage.getItem('contacts'))
      if(myRes){
        setMyContacts(myRes)
        setContact(myRes)
        setVisible(myRes)
      }

    const res = await api.get('')
      if (!myRes && res) {
          setContact(res.data)
          setVisible(res.data)
        } else if(myRes && res) {
            setMyContacts(myRes)
            setContact([...res.data, ...myRes])
            setVisible([...res.data, ...myRes])
          }
  }

  const onAddContact = (item) => {
    setContact([...contact, item])
    setVisible([...contact, item])
    
    let myArray = myContacts.slice()
    myArray.push(item)
    localStorage.setItem('contacts', JSON.stringify(myArray))
    setMyContacts(myArray)
    setShowAdd(false)

  }

  const removeContact = (item) => {
    let filteredContact = contact.filter(cont => cont.id !== item.id)
    setContact(filteredContact)
    setVisible(filteredContact)
    let myArray = myContacts.slice()
    if(myArray.find(cont => cont.id == item.id)){
      let myNewArray = myArray.filter(cont => cont.id !== item.id)
      localStorage.setItem('contacts', JSON.stringify(myNewArray))
      setMyContacts(myNewArray)
    }
  }

  const openEdit = async (item) => {
    setToEdit(item)
    console.log(toEdit)
    setShowEdit(true)
  }

  const onSaveEdit = (edited) => {
    let index = contact.findIndex(item => item.id === edited.id)
    contact[index] = edited
    setVisible([...contact])
    setShowEdit(false)
    setToEdit('')
  }

  const onFilter = (item) => {
    setVisible([...item])
  }

  const onClearFilter = () => {
    setVisible([...contact])
  }

  return (
    <>
      <header>
        <div className='contentHeader'>
        <button className='btn' onClick={() => setShowAdd(true)}>Add</button>
        <Filter array={contact} onFilter={onFilter} onClear={() => onClearFilter}/>
        </div>
      </header>
      
      <Resume array={contact} />

      <Modal show={showAdd} onHideModal={() => setShowAdd(false)}>
        <AddContact onAddContact={onAddContact}/>
      </Modal>

      <div className='list'>
        {
            contact ?
            visible.map((contact, index) => 
                <ItemList
                removeContact={() => removeContact(contact)}
                editContact={() => openEdit(contact)}
                key={index} first_name={contact.first_name}
                last_name={contact.last_name}
                email={contact.email}
                gender={contact.gender === 'F' ? 'Female' : 'Male'}
                language={contact.language}
                avatar={contact.avatar}
                birthday={contact.birthday} />)
                : null
        }
        </div>

        

        <Modal show={showEdit} onHideModal={() => setShowEdit(false)}>
          {
            toEdit ?
              <EditContact 
              item={toEdit}
              onSaveEdit={onSaveEdit}
              first_name={toEdit.first_name}
              last_name={toEdit.last_name}
              email={toEdit.email}
              gender={toEdit.gender}
              language={toEdit.language}
              avatar={toEdit.avatar}
              birthday={toEdit.birthday}
            />
            : null
          }
        </Modal>
    </>
  );
}

export default App;
