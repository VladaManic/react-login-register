import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const { currentUser, logout } = useAuth()
	const navigate = useNavigate();

	const [errMsg, setErrMsg] = useState('');

	const handleLogout = async () => {
		setErrMsg('')
		try {
			await logout()
			navigate('/')
		} catch {
			setErrMsg('Failed to logout')
		}
	}

	return (
		<div>
			<p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
			<p>{ currentUser.email }</p>
			<button onClick={handleLogout}>Log Out</button>
		</div>
	)
}

export default Home