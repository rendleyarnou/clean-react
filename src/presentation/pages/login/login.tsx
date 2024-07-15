import React from 'react'
import Styles from './login-styles.scss';

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}>
        cabeçalho
      </header>
      <form className={Styles.form}>
        form
      </form>
      <footer className={Styles.footer}>
        rodapé
      </footer>
    </div>
  )
}

export default Login
