import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Auth0Provider} from "@auth0/auth0-react"
import LoginForm from './components/LoginForm.jsx'

//Load enviroment variables.
const domain= import.meta.env.VITE_DOMAIN
const clientId= import.meta.env.VITE_CLIENT_ID

function App() {
  const [count, setCount] = useState(0)

  return (
	<Auth0Provider domain={domain} clientId={clientId} authorizationParams={{redirect_uri: window.location.origin}}>
	 <LoginForm/>
    </Auth0Provider>
  )
}

export default App
