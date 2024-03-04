import Layout from "../../layout/layout";
import './Register.css'

export default function Register() {
	return (
		<Layout>
			<div className="formulario-container">
				<h1 className="main-title-register">REGISTRO DE USUARIO</h1>

				<form
					className="user-register-form"
					id="user-register-form"
					// onSubmit={submitUserRegisterForm(event)}
					encType="multipart/form-data"
					>
					<div className="input-group">
						<label htmlFor="inputName">Nombre Completo</label>
						<input
							className="register-inputs"
							type="text"
							name="inputName"
							id="inputName"
							title="Ingrese Nombre Completo"
							placeholder="John Doe"
							minLength="4"
							maxLength="50"
							pattern="^[a-zA-Z]+( [a-zA-Z])*$"
							autoFocus
							required
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
							pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$"
							required
						/>
					</div>

					<div className="input-group">
						<label htmlFor="inputPassword">Contraseña</label>
						<br />
						<input
							className="register-inputs"
							type="password"
							name="inputPassword"
							id="inputPassword"
							minLength="5"
							maxLength="20"
							title="Debe tener entre 5 a 20 Caracteres y al menos 1 de cada elemento 'A-Z / Symbols / Numbers'"
							placeholder="********"
							pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
							required
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
							name="inputPassword2"
							id="inputPassword2"
							minLength="5"
							maxLength="20"
							title="Debe tener minimo 5 Caracteres y al menos 1 de cada elemento 'A-Z / Symbols / Numbers'"
							placeholder="********"
							pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
							required
						/>
					</div>

					<div className="input-group">
						<label htmlFor="inputDate">Fecha de Nacimiento</label>
						<br />
						<input
							className="register-inputs"
							type="date"
							name="inputDate"
							id="inputDate"
							min="1900-01-01"
							max="2024-01-01"
						/>
					</div>

					<div className="input-group">
						<label htmlFor="inputPais">
							Seleccione su provincia
						</label>
						<br />
						<select name="pais" id="inputPais" required className="register-select">
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
							name="observacion"
							id=""
							cols="50"
							rows="4"
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
