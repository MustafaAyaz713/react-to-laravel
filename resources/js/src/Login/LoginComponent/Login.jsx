import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import campusImage from './Images/CAMPUS.png';

function Login() {
  const [isLogin, setIsLogin] = useState(true); // Login mi Signup mı?
  const [isLocked, setIsLocked] = useState(true); // Şifre durumu
  const navigate = useNavigate(); // Sayfa yönlendirme için

  const toggleLockIcon = () => {
    setIsLocked((prevState) => !prevState); // Şifre görünürlüğünü değiştir
  };

  const toggleScreen = () => {
    setIsLogin((prevState) => !prevState); // Login <-> Signup geçişi
  };

  const handleLogin = () => {
    // Giriş yapma işlemi burada olabilir (ör. doğrulama)
    navigate('/home'); // HomePage'e yönlendir
  };

  return (
    <div className={styles.together}>
      <div className={styles.photo}></div>
      <div className={styles.container}>
        <img className={styles.header} src={campusImage} alt="Campus" />
        <div className={styles.flexcontainer}>
          {isLogin ? (
            <>
              {/* Login kısmı */}
              <div className={styles.label}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={styles.userIcon}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <input
                  className={styles.input}
                  type="text"
                  name="email"
                  placeholder="E-posta"
                />
              </div>
              <div className={styles.label}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={styles.userIcon}
                  onClick={toggleLockIcon}
                  style={{ cursor: 'pointer' }}
                >
                  {isLocked ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  )}
                </svg>
                <input
                  className={styles.input}
                  type={isLocked ? 'password' : 'text'}
                  name="password"
                  placeholder="Şifre"
                />
              </div>
              <button onClick={handleLogin} className={styles.loginButton}>
                Giriş Yap
              </button>
            </>
          ) : (
            <>
              {/* Signup kısmı */}
              <div className={styles.label}>
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  placeholder="Ad Soyad"
                />
              </div>
              <div className={styles.label}>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  placeholder="E-posta"
                />
              </div>
              <div className={styles.label}>
                <input
                  className={styles.input}
                  type="password"
                  name="password"
                  placeholder="Şifre"
                />
              </div>
              <button className={styles.signupButton}>Kaydol</button>
            </>
          )}
        </div>

        {/* Şifre hatırlatma ve diğer seçenekler */}
        {isLogin && (
          <div className={styles.flexForgotPassword}>
            <p>YA DA</p>
            <p className={styles.divider}>__________________________________________</p>
            <a href="#" className={styles.forgotPassword}>
              Şifreni mi unuttun?
            </a>
          </div>
        )}
      </div>

      {/* Ekran geçişi */}
      <div className={styles.signup}>
        {isLogin ? (
          <p>
            Hesabın yok mu?{' '}
            <a href="#" onClick={toggleScreen} className={styles.signupLink}>
              Kaydol
            </a>
          </p>
        ) : (
          <p>
            Zaten hesabın var mı?{' '}
            <a href="#" onClick={toggleScreen} className={styles.loginLink}>
              Giriş Yap
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;
