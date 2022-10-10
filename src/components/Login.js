import { React, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'

const Login = () => {
	const { login } = useAuth()
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [pwd, setPwd] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setErrMsg('');
	}, [email, pwd])

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log(email, pwd);
		try {
			setErrMsg('')
			setLoading(true)
			await login(email, pwd)
			navigate('/home')
		} catch {
			setErrMsg("Email or password is incorrect");
		}
		setLoading(false)
	}

	return (
		<>
			<section>
				<p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
				<h1>Log in</h1>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="username">
							Email:
						</label><br />
						<input
							type="email"
							id="email"
							//ref={userRef}
							autoComplete="off"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							required
						/>
					</div>

					<div>
						<label htmlFor="password">
							Password:
						</label>
						<input
							type="password"
							id="password"
							onChange={(e) => setPwd(e.target.value)}
							value={pwd}
							required
						/>
					</div>

					<button disabled={loading}>Sign In</button>
				</form>
				<p>
					Not registered?<br />
					<span className="line">
						<Link to='/register'>Sign Up</Link>
					</span>
				</p>
			</section>
		</>
	)
}

export default Login