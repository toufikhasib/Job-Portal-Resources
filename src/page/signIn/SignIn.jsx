import { useContext } from "react";
import { AuthContext } from "../../authContex/AuthProvider";
import { Link } from "react-router-dom";
import signInLottie from "../../assets/lottie/login.json";
import Lottie from "lottie-react";
const SignIn = () => {
	const { signInUser, setUser } = useContext(AuthContext);
	const handleLoginIn = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		const rePassword = form.rePassword.value;
		const loginUser = { email, password, rePassword };
		// console.log(loginUser);
		//  signInUser
		signInUser(email, password)
			.then((result) => {
				const currentUser = result.user;
				setUser(currentUser);
				console.log(currentUser);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};
	return (
		<div>
			<div className='hero bg-base-200 min-h-screen w-full'>
				<div className='hero-content flex-col lg:flex-row-reverse  w-full'>
					<div className='text-center lg:text-left '>
						<Lottie animationData={signInLottie}></Lottie>
					</div>
					<div className='card  w-full max-w-xl shrink-0 '>
						<h1 className='text-5xl font-bold  text-center'>Login now!</h1>
						<form onSubmit={handleLoginIn} className='card-body'>
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
									Don't have an Account?<Link to='/register'>Sign up</Link>
								</p>
							</div>
							<div className='form-control mt-6'>
								<button className='btn btn-primary'>Login</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
