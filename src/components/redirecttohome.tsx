import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectToHome() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/'); // Redirect to the home page on component mount
  }, [navigate]);

  return null; // Return an empty component to avoid rendering anything
}

export default RedirectToHome;