import Swal from "sweetalert2";
import axios from "axios";
import { useForm } from "react-hook-form";
import Layout from "../../layout/layout";
import './Register.css'

export default function Register() {

	const { register, handleSubmit, reset } = useForm();
	const URL = import.meta.env.VITE_SERVER_URL;

	async function submitedData(data) {
		try {
			const formData = new FormData();

			formData.append('name', data.name);
			formData.append('email', data.email);
			formData.append('password', data.password);
			formData.append('age', data.age);
			formData.append('location', data.location);
			if (data.image && data.image.length > 0 && data.image[0] instanceof File) {
				formData.append("image", data.image[0]);
			}

			const response = await axios.post(`${URL}/users`, formData);

			Swal.fire({
				title: 'Usuario Creado',
				text: `El usuario ${response.data.user?.name} fue creado correctamente`,
				icon: 'success',
			});
			reset();
			
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: 'error',
				title: 'No se creo usuario',
				text: 'Alguno de los datos ingresados no es correcto',
			});
			// if (error.response.status === 401) return logout();
		}
	}



	return (
		<Layout>
			<div className="formulario-container">
				<h1 className="main-title-register">REGISTRO DE USUARIO</h1>

				<form
					className="user-register-form"
					id="user-register-form"
					onSubmit={handleSubmit(submitedData)}
					encType="multipart/form-data"
					>
					<div className="input-group">
						<label htmlFor="name">Nombre Completo</label>
						<input
							className="register-inputs"
							type="text"
							name="name"
							id="inputName"
							title="Ingrese Nombre Completo"
							placeholder="John Doe"
							minLength="4"
							maxLength="50"
							autoFocus
							required
							{...register('name')}
						/>
					</div>

					<div className="input-group">
						<label htmlFor="inputCorreo">Correo Electronico</label>
						<br />
						<input
							className="register-inputs"
							type="email"
							name="inputCorreo"
							id="inputCorreo"
							minLength="6"
							maxLength="140"
							placeholder="Johndoe@gmail.com"
							// pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$"
							required
							{...register('email')}
						/>
					</div>

					<div className="input-group">
						<label htmlFor="inputPassword">Contraseña</label>
						<br />
						<input
							className="register-inputs"
							type="password"
							name="password"
							id="password"
							minLength="5"
							maxLength="20"
							title="Debe tener entre 5 a 20 Caracteres y al menos 1 de cada elemento 'A-Z / Symbols / Numbers'"
							placeholder="********"
							pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
							required
							{...register('password')}
						/>
					</div>

					<div className="input-group">
						<label htmlFor="inputPassword2">
							Repetir Contraseña
						</label>
						<br />
						<input
							className="register-inputs"
							type="password"
							name="password"
							id="password2"
							minLength="5"
							maxLength="20"
							title="Debe tener minimo 5 Caracteres y al menos 1 de cada elemento 'A-Z / Symbols / Numbers'"
							placeholder="********"
							pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
							required
							{...register('password')}
						/>
					</div>

					<div className="input-group">
						<label htmlFor="inputDate">Edad</label>
						<br />
						<input
										type="number"
										name="inputDate"
										id="inputDate"
										{...register('age')}
									/>
					</div>

					<div className="input-group">
						<label htmlFor="inputPais">
							Seleccione su provincia
						</label>
						<br />
						<select name="location" id="location" required className="register-select"
						{...register('location')}>
							<option value="buenos_aires">Buenos Aires</option>
							<option value="capital_federal">
								Capital Federal
							</option>
							<option value="catamarca">Catamarca</option>
							<option value="chaco">Chaco</option>
							<option value="chubut">Chubut</option>
							<option value="cordoba">Cordoba</option>
							<option value="corrientes">Corrientes</option>
							<option value="entre_rios">Entre Rios</option>
							<option value="formosa">Formosa</option>
							<option value="jujuy">Jujuy</option>
							<option value="la_pampa">La Pampa</option>
							<option value="la_rioja">La Rioja</option>
							<option value="mendoza">Mendoza</option>
							<option value="misiones">Misiones</option>
							<option value="neuquen">Neuquen</option>
							<option value="rio_negro">Rio Negro</option>
							<option value="salta">Salta</option>
							<option value="san_juan">San Juan</option>
							<option value="san_luis">San Luis</option>
							<option value="santa_cruz">Santa Cruz</option>
							<option value="santa_fe">Santa Fe</option>
							<option value="santiago_del_estero">
								Santiago del Estero
							</option>
							<option value="tierra_del_fuego">
								Tierra del Fuego
							</option>
							<option value="tucuman">Tucuman</option>
						</select>
					</div>

					<div className="input-group">
						<label htmlFor="">Observacion</label>
						<textarea
							className="register-textarea"
							name="observation"
							id="observation"
							cols="50"
							rows="4"
							{...register('observation')}
						></textarea>
					</div>

					<div>
						<button className="register-button" type="submit">Registrarse</button>
					</div>
				</form>
				<br></br>
				<br></br>
			</div>
		</Layout>
	);
}
