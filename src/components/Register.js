import { React, useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
	//const userRef = useRef();
	const errRef = useRef();

	const [user, setUser] = useState('');
	const [validName, setValidName] = useState(false);

	const [pwd, setPwd] = useState('');
	const [validPwd, setValidPwd] = useState(false);

	const [matchPwd, setMatchPwd] = useState('');
	const [validMatch, setValidMatch] = useState(false);

	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		const result = USER_REGEX.test(user);
		console.log(result);
		console.log(user);
		setValidName(result);
	}, [user])

	useEffect(() => {
		const result = PWD_REGEX.test(pwd);
		console.log(result);
		console.log(pwd);
		setValidPwd(result);
		const match = pwd === matchPwd;
		setValidMatch(match);
	}, [pwd, matchPwd])

	useEffect(() => {
		setErrMsg('');
	}, [user, pwd, matchPwd])

	const handleSubmit = async (e) => {
		e.preventDefault();
		// if button enabled with JS hack
		const v1 = USER_REGEX.test(user);
		const v2 = PWD_REGEX.test(pwd);
		if (!v1 || !v2) {
				setErrMsg("Invalid Entry");
				return;
		}
		const currentUser = {
			username: user,
			password: pwd
		} 
		axios({
			method: 'POST',
      url: 'https://react-login-register-667e6-default-rtdb.firebaseio.com/users.json',
      data: currentUser
		})
		setSuccess(true);
	}

	return (
		<>
			{success ? (
				<section>
					<h1>Success!</h1>
					<p>You have been registered.</p>
					<p>
						<Link to='/'>Sign In</Link>
					</p>
				</section>
			) : (
				<section>
					<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
					<h1>Register</h1>
					<form onSubmit={handleSubmit}>
						<div>
							<label htmlFor="username">
								Username:
								<FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
								<FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
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
							<p id="uidnote" className={user && !validName ? "instructions" : "offscreen"}>
								<FontAwesomeIcon icon={faInfoCircle} />
								4 to 24 characters.<br />
								Must begin with a letter.<br />
								Letters, numbers, underscores, hyphens allowed.
							</p>
						</div>

						<div>
							<label htmlFor="password">
								Password:
								<FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
								<FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
							</label>
							<input
								type="password"
								id="password"
								onChange={(e) => setPwd(e.target.value)}
								value={pwd}
								required
							/>
							<p id="pwdnote" className={pwd && !validPwd ? "instructions" : "offscreen"}>
								<FontAwesomeIcon icon={faInfoCircle} />
								8 to 24 characters.<br />
								Must include uppercase and lowercase letters, a number and a special character.<br />
								Allowed special characters: ! @ # $ %
							</p>
						</div>

						<div>
							<label htmlFor="confirm_pwd">
								Confirm Password:
								<FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
								<FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
							</label>
							<input
								type="password"
								id="confirm_pwd"
								onChange={(e) => setMatchPwd(e.target.value)}
								value={matchPwd}
								required
							/>
							<p id="confirmnote" className={matchPwd && !validMatch ? "instructions" : "offscreen"}>
								<FontAwesomeIcon icon={faInfoCircle} />
								Must match the first password input field.
							</p>
						</div>

						<button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
					</form>
					<p>
						Already registered?<br />
						<span className="line">
							<Link to='/'>Sign In</Link>
						</span>
					</p>
				</section>
		 	)}
		</>
	)
}

export default Register
