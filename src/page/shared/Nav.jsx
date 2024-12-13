import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../authContex/AuthProvider";
import logo from "../../assets/logo.png";
function Nav() {
	const { signOutUser, user, setUser } = useContext(AuthContext);
	const handleSignOut = () => {
		signOutUser().then((result) => {
			const currentUser = result.user;
			setUser(currentUser);
		});
	};
	const navLinks = (
		<>
			<NavLink to='/'>Home</NavLink>
		</>
	);
	return (
		<div>
			<div className='navbar bg-base-100'>
				<div className='navbar-start'>
					<div className='dropdown'>
						<div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h8m-8 6h16'
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'>
							{navLinks}
						</ul>
					</div>
					<div className='flex gap-3 items-center'>
						<img className="w-20 h-20 p-0" src={logo} alt='logo' />
						<h1>Job Protal</h1>
					</div>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<ul className='menu menu-horizontal px-1'>{navLinks}</ul>
				</div>
				<div className='navbar-end'>
					{user ? (
						<div>
							<button onClick={handleSignOut} className='btn btn-neutral'>
								Logt-Out
							</button>
						</div>
					) : (
						<div className='flex gap-3'>
							<button className='btn btn-neutral'>
								<Link to='/register'>Register</Link>
							</button>
							<button className='btn btn-neutral'>
								<Link to='/login'>Login</Link>
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Nav;
