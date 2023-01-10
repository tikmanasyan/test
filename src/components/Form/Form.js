// import { useState } from "react";
//karavarvox komponent
// const Form = () => {
//     const [text, setText] = useState('');
//     return(
//         <div>
//             <form onSubmit={(e) => {
//                 e.preventDefault();



//                 alert(text)
//             }}>
//                 <input type='text' onChange={ (e) => {
//                     setText(e.target.value);
//                 }} />
//                 <button>Send</button>
//             </form>

//             <h1>Result: {text.toUpperCase()} </h1>
//         </div>
//     );
// }

// export default Form;


// chkaravarvox komponent 
import { useRef } from "react";
const Form = () => { 
    const myForm = useRef(null);
    return(
        <div>
            <form ref={myForm} onSubmit={(e) => {
                e.preventDefault();  
                console.log(myForm.current[0].value * myForm.current[1].value);
            }}>
                <input type='text' />
                <input type='text' style={{paddingLeft:'10px'}} />
                <button>Send</button>
            </form>
        </div>
    );
}
export default Form;