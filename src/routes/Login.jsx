import { useState } from 'react';
import styles from '@/styles/Login.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');

  const login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.pathname || '/';
    console.log(location);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!username) return;
      login(username);
      setUsername('');
      navigate(from, { replace: true });
    };
  }; 

  return (
    <div>
      <h1>Login</h1>
      <div className={styles.formWrapper}>
        <form className={styles.form}>
          <input
            type='text'
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  )
};

export default Login;
