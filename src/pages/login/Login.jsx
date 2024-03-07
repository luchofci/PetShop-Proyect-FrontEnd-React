import './Login.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import Layout from '../../layout/layout';
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';

const URL = import.meta.env.VITE_SERVER_URL;

export default function Login() {
	const { login } = useContext(UserContext)

	function handleSubmit(event) {
		event.preventDefault();
		const el = event.target.elements;

		const data = {
			email: el.inputEmail.value,
			password: el.inputPassword.value,
		};
		login(data);
	}
	

	return (
		<Layout>
			<div className="formulario-container-login">
				<h1 className="h1-login">LOGIN</h1>
				<hr className="hr-login" />
				<form onSubmit={handleSubmit}>
					<div>
						<label className="label-login" htmlFor="inputName">
							Email
						</label>
						<br />
						<input
							className="input-login"
							type="email"
							name="inputEmail"
							id="inputEmail"
							title="Ingrese Email"
							placeholder="John@Doe.com"
							minLength="4"
							maxLength="50"
							autoFocus
							required
						/>
					</div>
					<div>
						<label className="label-login" htmlFor="inputPassword">
							Contraseña
						</label>
						<br />
						<input
							className="input-login"
							type="password"
							name="inputPassword"
							id="inputPassword"
							minLength="3"
							maxLength="20"
							title="Ingrese Contraseña"
							placeholder="******"
							required
						/>
					</div>
					<div>
						<button className="button-login" type="submit">
							Ingresar
						</button>
					</div>
				</form>
				<br />
				<br />
				<hr className="hr-login" />
			</div>
		</Layout>
	);
}
