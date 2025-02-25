import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Añadimos Link

const Register = () => {
    const [formData, setFormData] = useState({ email: '', password: '', full_name: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/v1/users/', formData);
            alert('User registered successfully!');
        } catch (error) {
            console.error(error.response.data);
            alert('Registration failed');
        }
    };

    return (
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className="form">
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <input type="text" name="full_name" placeholder="Full Name" onChange={handleChange} required />
                <button type="submit" className="btn-primary">Register</button>
            </form>
            <p className="switch-link">
                Already have an account? <Link to="/login">Login here</Link>
            </p>
        </div>
    );
};

export default Register;