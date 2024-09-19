import React from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from '@/presentation/components'
import '@/presentation/styles/global.scss'
import { makeLogin } from './factories/pages/login/login-factory'
import { makeSignup } from './factories/pages/signup/signup-factory'

const root = createRoot(document.getElementById('main'))

root.render(<Router makeLogin={makeLogin} makeSignup={makeSignup} />)
