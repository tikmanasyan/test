import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [isFetch, setIsFetch] = useState(true);
    useEffect(() => {
        if(isFetch) {
            axios.get("https://reqres.in/api/users").then(response => {
                setUsers(response.data.data);
            }).finally(()=> {
                setIsFetch(false);
            });
        }
    }, [isFetch]);
    return (
        <div>
            <ul>
                {users.map((user, index) => <li key={index}>
                    <Link to={`/users/${user.id}/${user.first_name + '_' + user.last_name} `}> {user.first_name} {user.last_name} </Link>
                    </li>)}
            </ul>
        </div>
    );
}

export default Users;