import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const UserList = () => {
    const { token, logout } = useAuth();
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({ email: '', full_name: '', password: '' });
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/v1/users/', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setUsers(response.data);
        } catch (error) {
            console.error(error.response.data);
            if (error.response.status === 401) logout();
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCreateOrUpdate = async (e) => {
        e.preventDefault();
        try {
            if (editId) {
                await axios.put(`http://localhost:8000/api/v1/users/${editId}`, formData, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setEditId(null);
            } else {
                await axios.post('http://localhost:8000/api/v1/users/', formData, {
                    headers: { Authorization: `Bearer ${token}` },
                });
            }
            setFormData({ email: '', full_name: '', password: '' });
            fetchUsers();
        } catch (error) {
            console.error(error.response.data);
        }
    };

    const handleEdit = (user) => {
        setEditId(user.id);
        setFormData({ email: user.email, full_name: user.full_name, password: '' });
    };

    const handleDelete = async (userId) => {
        try {
            await axios.delete(`http://localhost:8000/api/v1/users/${userId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchUsers();
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return (
        <div className="container">
            <h2>User Management</h2>
            <button onClick={logout} className="btn-logout">Logout</button>
            <form onSubmit={handleCreateOrUpdate} className="form">
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} placeholder="Full Name" required />
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                <button type="submit" className="btn-primary">{editId ? 'Update' : 'Create'} User</button>
            </form>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.full_name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => handleEdit(user)} className="btn-edit">Edit</button>
                                <button onClick={() => handleDelete(user.id)} className="btn-delete">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;