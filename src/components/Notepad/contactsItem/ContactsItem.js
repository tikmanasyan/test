function ContactsItem({contact, deleteItem, showPhone}) {
    return (
        <div>
            <ul>
                <li>
                    <span onClick={()=> {
                        showPhone(contact.id)
                    }}>{contact.name}</span>
                    <button onClick={()=> {
                        deleteItem(contact.id);
                    }}>X</button>
                </li>
            </ul>
        </div>
    )
}

export default ContactsItem;