import { useRef, useState } from "react";
import "./Notepad.css";

const Notepad = () => {
  const [data, setData] = useState([]);
  const ref = useRef(null);

  const deleteContact = (id) => {
    setData(contact => [
        ...contact.filter((item) => item.id !== id)
    ]);
  };
// data.filter((contact) => contact.id !== id)

  const viewNumber = (num) => {
    alert(num);
  };


  return (
    <div>
      <form
        ref={ref}
        onSubmit={(e) => {
          e.preventDefault();
          setData([
            ...data,
            {
              id: Math.random(),
              name: ref.current[0].value,
              number: ref.current[1].value,
            },
          ]);
          ref.current[0].value = "";
          ref.current[1].value = "";
        }}
      >
        <input type="text" placeholder="Add Contact Name" />
        <br />
        <input type="number" placeholder="Add Contact Number" />
        <br />
        <button>Add</button>
      </form>
      {data.map((contact) => {
        return (
          <ul>
            <li>
              <span
                onClick={() => {
                  viewNumber(contact.number);
                }}
              >
                {contact.name}
              </span>
              <button onClick={() => deleteContact(contact.id)}>Clear</button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Notepad;
