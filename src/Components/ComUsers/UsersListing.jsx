import React, { useEffect } from 'react';
import {connect,useSelector} from 'react-redux';
import {getUsers,deleteUser} from '../../Actions/UserAction';
import {NavLink,Link} from 'react-router-dom';
const UsersListing=(props)=>{

const state = useSelector(state => state.Users.Users);
    useEffect(()=>{
        props.getUsers();
        console.log(state);
    },[])

    const deleteUser=(id)=>{
      props.deleteUser(id);
    }
    return(
        <>
        <div className="container mt-5">
          <div>
              <Link className="btn btn-success float-right mr-2 mt-2 mb-2" to="/user/adduser">Add User</Link>
          </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {state.reverse().map((user, index) => (
              <tr key={index} >
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <NavLink className="btn btn-primary mr-2" to={`/user/viewuser/${user.id}`}>View</NavLink>
                  <NavLink className="btn btn-outline-primary mr-2" to={`/user/edituser/${user.id}`}>Edit</NavLink>
                  <button className="btn btn-danger mr-2" onClick={()=>{deleteUser(user.id)}} >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </>
    )
}

// const StateToProps=(state)=>{
// return{
//     Users:state.Users.Users,
// }
// }

export default connect(null,{getUsers,deleteUser})(UsersListing);