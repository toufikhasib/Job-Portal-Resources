import React, { useContext, useState } from "react";
import registerLottieData from "../../assets/lottie/registerLottie.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../authContex/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Register = () => {
	const { createNewUser, setUser, googleLogin } = useContext(AuthContext);

	const handleRegister = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const rePassword = form.rePassword.value;
		const userRegister = { name, email, password, rePassword };
		console.log(userRegister);

		if (password.lenth < 6) password.password;
		// createNewUser
		createNewUser(email, password)
			.then((result) => {
				const currentUser = result.user;
				setUser(currentUser);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};
	// handleGoogleLogin
	const handleGoogleLogin = () => {
		googleLogin()
			.then((result) => {
				const currentUser = result.user;
				setUser(currentUser);
				// console.log(currentUser);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};
	return (
		<div>
			<div className='hero bg-base-200 min-h-screen'>
				<div className='hero-content flex-col lg:flex-row-reverse'>
					<div className='text-center lg:text-left '>
						<Lottie animationData={registerLottieData}></Lottie>
					</div>
					<div className='card  w-full max-w-xl shrink-0 '>
						<h1 className='text-5xl font-bold  text-center'>Register now!</h1>

						<form onSubmit={handleRegister} className='card-body'>
							<div>
								<h1 className='flex justify-center items-center gap-5  border-2 py-2 '>
									<FaGoogle size={20} />{" "}
									<span
										onClick={handleGoogleLogin}
										className='text-black text-2xl font-semibold'>
										{" "}
										Sign up with Google
									</span>
								</h1>
								<div className='divider'>
									<p>Or continue with</p>
								</div>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Full Name</span>
								</label>
								<input
									name='name'
									type='text'
									placeholder='name'
									className='input input-bordered'
									required
								/>
							</div>

							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input
									name='email'
									type='email'
									placeholder='email'
									className='input input-bordered'
									required
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>password</span>
								</label>
								<input
									name='password'
									type='password'
									placeholder='password'
									className='input input-bordered'
									required
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Re-Password</span>
								</label>
								<input
									name='rePassword'
									type='password'
									placeholder='password'
									className='input input-bordered'
									required
								/>
								<label className='label'>
									<a href='#' className='label-text-alt link link-hover'>
										Forgot password?
									</a>
								</label>
							</div>
							<div>
								<p>
									Already have an account? <Link to='/login'>Sign in</Link>
								</p>
							</div>
							<div className='form-control mt-6'>
								<button className='btn btn-primary'>Register</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
