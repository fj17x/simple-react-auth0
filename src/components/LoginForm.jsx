import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

const LoginForm = () => {
	const {loginWithRedirect,logout,user, isAuthenticated, isLoading} = useAuth0()
	return (
		<>
		{isLoading && <h1>Please wait...</h1>}
		{isAuthenticated && <img src={user.picture}/>}
			<h2>Status: {isAuthenticated? `Logged in as ${user.name}` : "Logged out"}</h2>
			<button onClick={()=> loginWithRedirect()}>
				Login 
			</button>
			<br/>
			<br/>
			<button onClick={()=> logout()}>
				Logout 
			</button>
		</>
	)
	
	
}

export default LoginForm