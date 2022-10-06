import { React, useRef, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import Home from './Home';

const Login = () => {
	const navigate = useNavigate();
	const errRef = useRef();

	const [user, setUser] = useState('');
	const [pwd, setPwd] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		setErrMsg('');
	}, [user, pwd])

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(user, pwd);
		setUser('');
		setPwd('');
		setSuccess(true);
		//navigate('/home')
	}

	return (
		<>
			{success ? (
				<section>
					<h1>You are now logged in!</h1>
				</section>
			) : (
				<section>
					<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
					<h1>Log in</h1>
					<form onSubmit={handleSubmit}>
						<div>
							<label htmlFor="username">
								Username:
							</label>
							<input
								type="text"
								id="username"
								//ref={userRef}
								autoComplete="off"
								onChange={(e) => setUser(e.target.value)}
								value={user}
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

						<button>Sign In</button>
					</form>
					<p>
						Not registered?<br />
						<span className="line">
							<Link to='/register'>Sign Up</Link>
						</span>
					</p>
				</section>
			)}
		</>
	)
}

export default Login