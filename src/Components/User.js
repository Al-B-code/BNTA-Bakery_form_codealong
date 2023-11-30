const User = ({user}) => {
    return (
        <div>
            <p><b>Name:</b>{user.name}</p>
            <p><b>Email:</b>{user.email}</p>
        </div>
      );
}
 
export default User;