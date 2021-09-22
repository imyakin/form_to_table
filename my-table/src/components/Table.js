import React from "react";

export const Table = ({allusers, handleDeleteUser}) =>{
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date of birth</th>
                    <th>email</th>
                    <th>phone or number</th>
                    {allusers.length > 0 ? <th>Actions</th> : null}
                </tr>
            </thead>
            <tbody>
                {allusers.map((user) => {
                    return(
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.dateofbirth}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>
                            <button 
                            type="button"
                            onClick={()=> handleDeleteUser(user.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    )
}