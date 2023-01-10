import UserItem from "./../UserItem/UserItem"
const UserList = ({ users }) => {
    return(
<table>
        <thead>
          <tr>
            <th>#id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
      {users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          age={user.age}
          active={user.active}
        />
      ))}
      </tbody>
    </table>

    );
} 

export default UserList;