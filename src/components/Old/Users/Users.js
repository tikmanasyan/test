// import { useState } from "react";
// import "./Users.css";

// const Users = () => {
//     const [users, setUser] = useState([
//         {id:1, name:'John'},
//         {id:2, name:'Tom'},
//         {id:3, name:'Emma'},
//         {id:4, name:'Sarah'},
//         {id:5, name:'Jack'},
//         {id:6, name:'Jane'} 
//     ]);

//     return (
//         <div>
//             <ol>
//                 {users.map( user => <li key={user.id}>{user.name}</li>)}
//             </ol>
//         </div>
//     );
// } 
// export default Users;


import './Users.css';

const Users = ({id, name, age, active}) => {
    return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td style={{color: active ? 'green': 'red'}}>{active? 'Yes': 'No'}</td>
            </tr>
    )
}

export default Users;