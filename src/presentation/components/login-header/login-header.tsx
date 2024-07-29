import React, { memo } from 'react'
import Styles from './login-header-styles.scss'
import { Logo } from '@/presentation/components'

const LoginHeader: React.FC = () => {
  return (
    <header className={Styles.header}>
      <Logo />
      <h1>ReactJs com Webpack, Clean Architecture e Clean Code</h1>
    </header>
  )
}

export default memo(LoginHeader)
