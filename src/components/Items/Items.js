import { useEffect, useState } from "react";

const Items = () => { 
    const [items, setItem] = useState([]);
    const [body, setBody] = useState('');
    useEffect(() => {
        console.log("Hello");
    }, [items]);

    return(
        <div>
            <input type='text' onChange={ (e) => {
                setBody(e.target.value);
            }} />   


            <button onClick={() => {  
                setItem([
                    {id:Date.now(), body},
                    ...items
                ]) ;
                console.log(items);    
            }}>Add</button>

            <ul>
                {items.map( item => <li key={item.id}>{item.body}</li>)}
            </ul>

        </div>
    );
}

export default Items;