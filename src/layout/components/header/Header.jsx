// import { NavLink } from 'react-router-dom';
// import './Header.css';
// import { useOrder } from '@/context/OrderContext';
// import { useUser } from '@/context/UserContext';

import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import LogoNav from '../../../assets/image/Logo-Nav.png'

export default function Header() {
	// const { toggleMenu, totalItems } = useOrder();
	// const { user, logout, admin } = useUser()
	const navigate = useNavigate();
	const isAdmin = true;
	const currentUser = JSON.parse(localStorage.getItem('currentUser'));

	function logout() {
		localStorage.removeItem('currentUser');
		localStorage.removeItem('token');
		navigate('/');
	}
	// ----------------------------
	return (
		<header className="main-header">
			<input className="input-check" type="checkbox" id="check-menu" />

			<label className="burger-menu" htmlFor="check-menu">
				<div className="burger-icon">
					<i className="fa-solid fa-paw"></i>
				</div>
			</label>

			<Link className="logo-link" to="/">
				<img
					className="nav-logo"
					srcSet={LogoNav}
					alt="logo-img"
				/>
			</Link>

			<nav className="main-nav">
				<div className="nav-list">
					<div className="nav-item">
						{/* VER LAS CLASSNAME DE LOS NAVLINK */}
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? 'nav-link active' : 'nav-link'
							}
						>
							Principal
						</NavLink>
					</div>
					<div className="nav-item">
						<NavLink to="/contact" className="nav-link">
							Contacto
						</NavLink>
					</div>
					<div className="nav-item">
						<NavLink to="/register" className="nav-link">
							Registro
						</NavLink>
					</div>
					<div className="nav-item">
						<NavLink to="/about-us" className="nav-link">
							Nosotros
						</NavLink>
					</div>
					<div className="nav-item">
						<NavLink to="/adopta" className="nav-link">
							"ADOPTA"
						</NavLink>
					</div>
					<div className="nav-item">
						{currentUser ? (
							<NavLink
								className="nav-link"
								onClick={() => logout()}
							>
								Logout
							</NavLink>
						) : (
							<NavLink to="/login" className="nav-link">
								Login
							</NavLink>
						)}
					</div>
					{isAdmin && (
						<>
							<div className="nav-item">
								<NavLink
									to="/admin-product"
									className="nav-link"
								>
									Admin Product
								</NavLink>
							</div>
							<div className="nav-item">
								<NavLink to="/admin-user" className="nav-link">
									Admin User
								</NavLink>
							</div>
						</>
					)}
				</div>
			</nav>
			{/* <div className="user-info">
					{user ? (
						<>
							<div className="icon-container">
								<i 
									className='cart-icon fa-solid fa-cart-shopping'
									data-count = {totalItems}
									onClick={()=>toggleMenu()}
									></i>
							</div>
							<div className="dropdown-menu user-avatar">
								<img src={`${URL}/images/users/${user.image}`} alt={user.name} />
								<div className="dropdown-links">
									<NavLink to="/orders" className='nav-link'>
										<i className="fa-solid fa-dolly"></i>
										Ordenes
									</NavLink>
									<a className="nav-link" onClick={()=>logout()}>
										<i className="pointer fa-solid fa-arrow-right-from-bracket"></i>{''}
										Logout
									</a>
								</div>
							</div>
						</>
					) : (
						<NavLink to='/login' className='nav-link'>
							Login
						</NavLink>
					)}
				</div>		 */}
		</header>
	);
}
