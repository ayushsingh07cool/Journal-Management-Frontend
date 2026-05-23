import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

    const navigate = useNavigate();

    return (
        <div className="landing-container">

            <nav className="navbar">
                <h2 className="logo">JournalApp</h2>

                <div className="nav-buttons">
                    <button onClick={() => navigate('/login')}>
                        Login
                    </button>

                    <button
                        className="signup-btn"
                        onClick={() => navigate('/signup')}
                    >
                        Signup
                    </button>
                </div>
            </nav>

            <div className="hero-section">

                <div className="hero-content">
                    <h1>
                        Capture Your Thoughts,
                        <br />
                        Anytime Anywhere
                    </h1>

                    <p>
                        A secure and simple journal application
                        to write your daily memories, thoughts,
                        and ideas.
                    </p>

                    <button
                        className="start-btn"
                        onClick={() => navigate('/signup')}
                    >
                        Get Started
                    </button>
                </div>

            </div>
        </div>
    );
};

export default LandingPage;