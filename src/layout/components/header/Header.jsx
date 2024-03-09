import { NavLink } from 'react-router-dom';
import { useOrder } from '../../../context/OrderContext';
import { useUser } from '../../../context/UserContext';
import LogoNav from '../../../assets/image/Logo-Nav.png';
import './Header.css';
import { useEffect } from 'react';
const URL = import.meta.env.VITE_SERVER_URL;

export default function Header() {
	const { toggleMenu, totalItems } = useOrder();
	const { user, logout, admin } = useUser();

	useEffect(() => {
	}, [user]);

	// ----------------------------
	return (
		<header className="main-header">
			<input className="input-check" type="checkbox" id="check-menu" />

			<label className="burger-menu" htmlFor="check-menu">
				<div className="burger-icon">
					<i className="fa-solid fa-paw"></i>
				</div>
			</label>

			<NavLink className="logo-link" to="/">
				<img className="nav-logo" srcSet={LogoNav} alt="logo-img" />
			</NavLink>

			<nav className="main-nav">
				<div className="nav-list">
					<div className="nav-item">
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
						<NavLink to="/about-us" className="nav-link">
							Nosotros
						</NavLink>
					</div>
					<div className="nav-item">
						<NavLink to="/adopta" className="nav-link">
							"ADOPTA"
						</NavLink>
					</div>
					{!user && (
						<div className="nav-item">
							<NavLink to="/register" className="nav-link">
								Registro
							</NavLink>
						</div>
					)}

					{admin && (
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
					<div className="user-info">
						<div className="nav-item">
							<div className="nav-link">
								{user ? (
									<>
										<div className="icon-container">
											<i
												className="cart-icon fa-solid fa-cart-shopping"
												data-count={totalItems}
												onClick={() => toggleMenu()}
											></i>
										</div>
										<div className="dropdown-menu user-avatar">
											
											<img
												src={`${URL}/images/users/${user.image}`}
												alt={user.name}
											/>
											<div className="dropdown-links">
												<NavLink
													to="/orders"
													className="nav-link"
												>
													<i className="fa-solid fa-dolly"></i>
													Ordenes
												</NavLink>
												<a
													className="nav-link"
													onClick={() => logout()}
												>
													<i className="pointer fa-solid fa-arrow-right-from-bracket"></i>
													{''}
													Logout
												</a>
											</div>
										</div>
									</>
								) : (
									// <div className="nav-item">
									<NavLink to="/login" className="nav-link">
										Login
									</NavLink>
									// </div>
								)}
							</div>
						</div>
					</div>
				</div>
			</nav>

			<nav className="main-nav-mobile">
				{user ? (
					<div className="nav-item">
						<div
							style={{
								display: 'flex',
								'justifyContent': 'space-around',
								'alignItems': 'center',
								'padding': '10px 0'
							}}
						>
							<div className="icon-container">
								<i
									style={{
										fontSize: '1.5rem', 
										color: 'rgb(67, 79, 92)', 
										cursor: 'pointer', 
									}}
									className="cart-icon fa-solid fa-cart-shopping"
									data-count={totalItems}
									onClick={() => toggleMenu()}
								></i>
							</div>
							<img
								style={{ width: '35px' }}
								src={`${URL}/images/users/${user.image}`}
								alt={user.name}
							/>
						</div>
					</div>
				) : (
					<>
						<div className="nav-item">
							<NavLink to="/login" className="nav-link login-register">
								Login
							</NavLink>
						</div>

						<div className="nav-item ">
							<NavLink to="/register" className="nav-link login-register">
								Registro
							</NavLink>
						</div>
					</>
				)}

				<div className="nav-list">
					<div className="nav-item">
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? 'nav-link login-register  active' : 'nav-link login-register'
							}
						>
							Principal
						</NavLink>
					</div>
					<div className="nav-item">
						<NavLink to="/contact" className="nav-link login-register">
							Contacto
						</NavLink>
					</div>

					<div className="nav-item">
						<NavLink to="/about-us" className="nav-link login-register">
							Nosotros
						</NavLink>
					</div>
					<div className="nav-item">
						<NavLink to="/adopta" className="nav-link login-register">
							"ADOPTA"
						</NavLink>
					</div>

					{admin && (
						<>
							<div className="nav-item">
								<NavLink
									to="/admin-product"
									className="nav-link login-register"
								>
									Admin Product
								</NavLink>
							</div>
							<div className="nav-item">
								<NavLink to="/admin-user" className="nav-link login-register">
									Admin User
								</NavLink>
							</div>
						</>
					)}

					<div className="nav-item"></div>
					{user && (
						<>
							<div className="nav-item">
								<NavLink to="/orders" className="nav-link login-register">
									Ordenes
								</NavLink>
							</div>
							<div className="nav-item">
								<a
									style={{cursor:'pointer'}}
									className="nav-link login-register"
									onClick={() => logout()}
								>
									<i className="pointer fa-solid fa-arrow-right-from-bracket"></i>
									{''}
									Logout
								</a>
							</div>
						</>
					)}
				</div>
			</nav>
		</header>
	);
}
