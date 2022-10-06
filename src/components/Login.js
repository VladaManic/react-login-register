import { React, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
	const errRef = useRef();

	const [user, setUser] = useState('');
	const [pwd, setPwd] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);

	return (
		<section>
			<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
			<h1>Log in</h1>
			<form>
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
	)
}

export default Login