import { useState } from "react";

const MyForm = ({add}) => {
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        add(text);
        setText('');
    } 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={text} type='text' onChange={ (e) => {
                    setText(e.target.value);
                }} />
                <button>Add</button>
            </form>
        </div>
    );
}

export default MyForm;