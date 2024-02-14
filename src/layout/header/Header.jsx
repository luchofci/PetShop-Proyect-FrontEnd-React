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
