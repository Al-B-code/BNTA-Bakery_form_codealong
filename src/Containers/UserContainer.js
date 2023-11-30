import UserList from "../Components/UserList";
import UserForm from "../Components/UserForm";
import { useState } from "react";


const UserContainer = () => {

    const [users, setUsers] = useState([
        {
            name: "Anna",
            email: "anna@email.com",
            password: "password",
            id: 1
        },
        {
            name: "Thibyaa",
            email: "thibyaa@email.com",
            password: "1234",
            id: 2
        }
    ]);

    const handleNewUserSubmission = (newUser) => {
        const updatedUsers =  [...users];
        updatedUsers.push(newUser);
        setUsers(updatedUsers);
    }

    return (
        <>
            <h1>User Directory</h1>
            <UserForm onNewUserSubmission={handleNewUserSubmission}/>
            <hr/>
            <UserList
            users={users}
            />
        </>
        );
}

export default UserContainer;