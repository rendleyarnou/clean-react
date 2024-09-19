import React, { useEffect, useState } from 'react'
import Styles from './signup-styles.scss'
import {
  LoginHeader,
  Input,
  FormStatus,
  Footer
} from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import type { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation: Validation
}

const Signup: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    nameError: '',
    emailError: '',
    passwordError: '',
    passwordConfirmationError: '',
    mainError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      nameError: validation.validate('name', state.name),
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password),
      passwordConfirmationError: validation.validate(
        'passwordConfirmation',
        state.passwordConfirmation
      )
    })
  }, [state.name, state.email, state.password, state.passwordConfirmation])

  return (
    <div className={Styles.signup}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form className={Styles.form}>
          <h2>Criar conta</h2>
          <Input type='text' name='name' placeholder='Digite seu nome' />
          <Input type='email' name='email' placeholder='Digite seu E-mail' />
          <Input
            type='password'
            name='password'
            placeholder='Digite sua senha'
          />
          <Input
            type='password'
            name='passwordConfirmation'
            placeholder='Repita sua senha'
          />
          <button
            data-testid='submit'
            type='submit'
            disabled={
              !!state.nameError ||
              !!state.emailError ||
              !!state.passwordError ||
              !!state.passwordConfirmationError
            }
            className={Styles.submit}
          >
            Entrar
          </button>
          <span className={Styles.link}>Voltar para login</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Signup
