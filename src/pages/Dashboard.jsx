import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

return (
    <div className="dashboard-container">
        <div className="dashboard-card">
            <h1>Welcome to Your Journal</h1>
            <p>Write, manage, and revisit your personal thoughts securely.</p>

            <button onClick={handleLogout} className="logout-btn">
                Logout
            </button>
        </div>
    </div>
);
};

export default Dashboard;