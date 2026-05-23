import './Signup.css';
import { useState } from 'react';
import API from '../api/axiosConfig';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
          await API.post('/public/signup', {
    userName,
    password
});

            alert('Signup Successful');
            navigate('/');

        } catch (error) {
            alert('Signup Failed');
        }
    };


    const loginNavigate = () => {
        navigate("/login");
    }

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSignup}>

                <h2>Create Account</h2>

                <input
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Signup</button>
                  <p className="login-text">
        Already have an account?
        <span onClick={() => navigate('/login')}>
            Login
        </span>
    </p>
            </form>
            
        </div>
    );
};

export default Signup;