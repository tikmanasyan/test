import { useRef, useState } from "react";
import ContactsItem from "./contactsItem/ContactsItem";
import "./Notepad.css";

const Notepad2 = () => {
  const [contactsData, setContactsData] = useState([]);
  const formRef = useRef(null);

  const deleteItem = (id) => {
    setContactsData(contactsData.filter(item => item.id !== id))
  }

  const showPhone = (item) => {
    setContactsData(contactsData.filter(contact => contact.id === item));
    alert(contactsData[0].phone);
  }

  return (
    <div>
      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          setContactsData([
            ...contactsData,
            {
              id: Math.random(),
              name: formRef.current[0].value,
              phone: formRef.current[1].value,
            },
        ]);
        formRef.current[0].value = ''; 
        formRef.current[1].value = '';
    }}
    >
        <input type="text" placeholder="name and surname" />
        <br />
        <input type="number" placeholder="your phone number" />
        <br />
        <button>ADD</button>
      </form>
      {contactsData.map((contact) => 
        <ContactsItem key={contact.id} contact={contact} deleteItem={deleteItem} showPhone={showPhone}/>
      )}
    </div>
  );
};
export default Notepad2;
