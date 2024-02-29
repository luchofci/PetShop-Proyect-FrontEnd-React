import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
    const navigate = useNavigate()
    const isAdmin = true;
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))

    function logout(){
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
        navigate("/")
    }

	return (
		<header className=''>
			{/* VER LAS CLASSNAME DE LOS NAVLINK */}
			<NavLink to="/" className={({isActive})  => isActive ?    "nav-link active" : 'nav-link'}>Principal</NavLink>
			<NavLink to="/contact" className="">
				Contacto
			</NavLink>
			<NavLink to="/register" className="">
				Registro
			</NavLink>
			<NavLink to="/about-us" className="">
				Acerca de
			</NavLink>
			{/* <NavLink to="/adopta" className="">
				"ADOPTA"
			</NavLink> */}
			{currentUser ? (
				<NavLink className="nav-link" onClick={() => logout()}>
					Logout
				</NavLink>
			) : (
				<NavLink to="/login" className="nav-link">
					Login
				</NavLink>
			)}
			{isAdmin && (
				<>
					<NavLink to="/admin-product" className="nav-link">
						Admin Product
					</NavLink>
					<NavLink to="/admin-user" className="nav-link">
						Admin User
					</NavLink>
				</>
			)}
		</header>
	);
}


// ------------------------------------------

// import { NavLink } from 'react-router-dom';
// import './Header.css';
// import { useOrder } from '@/context/OrderContext';
// import { useUser } from '@/context/UserContext';

// export default function Header() {
// 	const { toggleMenu, totalItems } = useOrder();
// 	const { user, logout, admin } = useUser()
	

// 	return (
// 		<header className="header">
// 			<nav className="nav-list">

// 			<NavLink
// 				to="/"
// 				className={({ isActive }) =>
// 				isActive ? 'nav-link active' : 'nav-link'
// 			}
// 			>
// 				Principal
// 			</NavLink>
// 			<NavLink to="/contact" className="nav-link">
// 				Contacto
// 			</NavLink>
// 			<NavLink to="/about-us" className="nav-link">
// 				Acerca de
// 			</NavLink>
// 			<NavLink to="/about-us" className="nav-link">
// 				"ADOPTA"
// 			</NavLink>
			
// 			{!user &&(
// 				<NavLink to="/register" className="nav-link">
// 					Registro
// 				</NavLink>
// 			)}

// 			{admin && (
// 				<>
// 					<NavLink to="/admin-product" className="nav-link">
// 						Admin Product
// 					</NavLink>
// 					<NavLink to="/admin-user" className="nav-link">
// 						Admin User
// 					</NavLink>
// 				</>
// 			)}
// 			</nav>
			

// 				<div className="user-info">
// 					{user ? (
// 						<>
// 							<div className="icon-container">
// 								<i 
// 									className='cart-icon fa-solid fa-cart-shopping'
// 									data-count = {totalItems}
// 									onClick={()=>toggleMenu()}
// 									></i>
// 							</div>
// 							<div className="dropdown-menu user-avatar">
// 								<img src={`${URL}/images/users/${user.image}`} alt={user.name} />
// 								<div className="dropdown-links">
// 									<NavLink to="/orders" className='nav-link'>
// 										<i className="fa-solid fa-dolly"></i>
// 										Ordenes
// 									</NavLink>
// 									<a className="nav-link" onClick={()=>logout()}>
// 										<i className="pointer fa-solid fa-arrow-right-from-bracket"></i>{''}
// 										Logout
// 									</a>
// 								</div>
// 							</div>
// 						</>
// 					) : (
// 						<NavLink to='/login' className='nav-link'>
// 							Login
// 						</NavLink>
// 					)}
// 				</div>
			
// 		</header>
// 	);
// }
