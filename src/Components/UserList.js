import User from "./User";

const UserList = ({users}) => {

    const userComponents = users.map((user) => {
        return <User user={user} key={user.id}/>
    }

    )

    return (
        <section>
            <h2>All Users</h2>
            {userComponents}
            
        </section>
    )
}

export default UserList;