import { useState } from "react";




const UserForm = ({onNewUserSubmission}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
x
    const updateUserName = (event) => {
        setName(event.target.value);
    }

    const updateUserEmail = (event) => {
        setEmail(event.target.value);
    }

    const updateUserPassword = (event) => {
        setPassword(event.target.value)
    }

    const updateUserConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!name || !email || !password){
            alert("Need to provide all details");
            return;
        }

        if (password !== confirmPassword){
            alert("Passwords don't match!")
            return;
        }


        
        const newUser = {
            name: name,
            email: email,
            password: password,
            id: Date.now()
        }
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        onNewUserSubmission(newUser);
    }


    return (

        <section>
            <h2>Add a new user:</h2>
            <form onSubmit={(event) => handleFormSubmit(event)}>
                <label htmlFor="name-input">Name:</label>
                <input
                    type="text"
                    id="name-input"
                    onInput={(event) => updateUserName(event)}
                    value={name}
                />
                <label htmlFor="email-input">Email:</label>
                <input
                    type="email"
                    id="email-input"
                    onInput={(event) => updateUserEmail(event)}
                    value={email}
                />
                <label htmlFor="password-input">Password:</label>
                <input
                    type="password"
                    id="password-input"
                    onInput={(event) => updateUserPassword(event)}
                    value={password}
                />
                <label htmlFor="confirm-password-input">Confirm Password</label>
                <input
                    type="password"
                    id="confirm-password-input"
                    onInput={(event) => updateUserConfirmPassword(event)}
                    value={confirmPassword}
                />
                <input type="submit" value="Add New User"/>
            </form>
        </section>

    )


}

export default UserForm