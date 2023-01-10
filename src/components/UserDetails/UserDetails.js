import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"
const UserDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
    console.log(params);
    const [user, setUser] = useState({});
    const [isFetch, setIsFetch] = useState(true);
    useEffect(() => {
        if(isFetch) {
            axios.get(`https://reqres.in/api/users/${params.id}`).then(response => {
                setUser(response.data.data);
            }).finally(()=> {
                setIsFetch(false);
            });
        }
    }, [isFetch]);
    return (
        <div>
            <button 
                className="btn btn-secondary mt-2 mb-2"
                onClick={() => {
                    navigate("/users");
                }}
            
            >Back</button>
            <h1>{user.first_name} {user.last_name}</h1>
            <p>{user.email}</p>
            <img src={user.avatar} />
        </div>
    );
}

export default UserDetails;