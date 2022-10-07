import React from 'react'
import { useAuth } from '../contexts/AuthContext'

const Home = () => {
	const { currentUser } = useAuth()

	const handleLogout = () => {

	}

	return (
		<div>
			<p>{ currentUser.email }</p>
			<button onClick={handleLogout}>Log Out</button>
		</div>
	)
}

export default Home