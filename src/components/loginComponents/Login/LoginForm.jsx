import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

import { useDispatch } from "react-redux";

import { authActions } from "../../store";
const Login = () => {
	const dispatch = useDispatch();
	const history = useNavigate();
	const [inputs, setInputs] = useState({
	  email: "",
	  password: "",
	});
	const handleChange = (e) => {
	  setInputs((prev) => ({
		...prev,
		[e.target.name]: e.target.value,
	  }));
	};
	const sendRequest = async () => {
	  const res = await axios
		.post("http://localhost:5000/api/login", {
		  email: inputs.email,
		  password: inputs.password,
		})
		.catch((err) => console.log(err));
	  const data = await res.data;
	  return data;
	};
	const handleSubmit = (e) => {
	  e.preventDefault();
	  // send http request
	  sendRequest()
		.then(() => dispatch(authActions.login()))
		.then(() => history("/user"));
	};
	return (
		
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h2>Login to Your Account</h2>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={inputs.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={inputs.password}
							required
							className={styles.input}
						/>
						{/* {error && <div className={styles.error_msg}>{error}</div>} */}
						<button type="submit" className={styles.green_btn}>
							Sing In
						</button>
						<p>Forgot password? <Link to="/forgotPassword">Click here</Link></p>
					</form>
				</div>
				<div className={styles.right}>
					<h2>New Here ?</h2>
					<Link to="/signupForm">
						<button type="button" className={styles.white_btn}>
							Sing Up
						</button>
						
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;