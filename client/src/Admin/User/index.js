import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import swal from 'sweetalert';
import AuthContext from "../../Contexts/authContext";

const Dashboard = () =>
{
    const { api } = useContext(AuthContext);
    const [ users, setUsers ] = useState([]);

    const deleteUser = (userId) =>
    {
        api.delete(`/user/${ userId }`)
            .then((res) =>
            {
                swal({
                    title: res.data.message,
                    icon: "success",
                });
                getAllUsers();
            }).catch((err) =>
            {
                console.log(err.message);
            })
    }
    const getAllUsers = async () =>
    {
        api.get("/user").then((res) =>
        {
            setUsers(res.data.users);
        }).catch((err) =>
        {
            console.log(err.message);
        })
    }

    useEffect(() =>
    {
        getAllUsers();
    }, []);
    return (
        <div className="dark:bg-slate-900">
            <Container>
                <Row>
                    <Col md={ 12 }>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-5">
                            <table className="w-full text-sm text-left text-slate-900 dark:text-gray-400 dark:bg-slate-700 border-slate-50">
                                <thead className="text-xs text-center text-gray-200 uppercase bg-dark dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            ID
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Email
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Phone
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Purchased Courses
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Delete User
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    { users.map((user, index) => (
                                        <tr key={ index }>
                                            <td className="px-6 py-4">
                                                { index + 1 }
                                            </td>
                                            <td className="px-6 py-4">
                                                { `${ user.firstName } ${ user.lastName }` }
                                            </td>
                                            <td className="px-6 py-4">
                                                { user.email }
                                            </td>
                                            <td className="px-6 py-4">
                                                { user.contactNumber }
                                            </td>
                                            <td className="px-6 py-4">
                                                { (user.courses.length) }
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="font-medium rounded bg-red-500 px-3 py-2 text-white no-underline hover:bg-red-800" onClick={ () => { deleteUser(user._id); } }>Delete</button>
                                            </td>
                                        </tr>
                                    )) }
                                </tbody>
                            </table>
                        </div>
                    </Col>
                </Row>
            </Container >
        </div>
    )
}

export default Dashboard;
