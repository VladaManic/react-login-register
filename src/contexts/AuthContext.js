import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase' 

const AuthContext = React.createContext()

export function useAuth() {
	return useContext(AuthContext)
}

export function AuthProvider({ children }) {
	const [loading, setLoading] = useState(true)
	const [currentUser, setCurrentUser] = useState()

	async function signup(email, password, username) {
		const { user } = await auth.createUserWithEmailAndPassword(email, password)
		user.updateProfile({
			displayName: username
		});
		
	}
	useEffect(() => {
		//Method which goes with method createUserWithEmailAndPassword, so user can be set
		const unsubscribe = auth.onAuthStateChanged(user => {
			setCurrentUser(user)
			setLoading(false)
		})
		return unsubscribe
	}, [])

	function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

	function logout() {
		auth.signOut()
	}

	const value = {
		currentUser,
		signup,
		login,
		logout
	}

	return (
    <AuthContext.Provider value={value}>
      { !loading && children }
    </AuthContext.Provider>
  )
}