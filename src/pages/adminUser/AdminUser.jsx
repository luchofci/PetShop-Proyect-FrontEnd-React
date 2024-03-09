import './adminUser.css'
import Layout from '../../layout/layout';
import Swal from 'sweetalert2';
import axios from 'axios';

import { useForm } from 'react-hook-form';
import { UserTable } from '../../components/userTable/userTable';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cart } from '../../components/cart/Cart';

const URL = import.meta.env.VITE_SERVER_URL;
const TOKEN = localStorage.getItem('token');

export default function AdminUser() {
	const [dbUsers, setDbUsers] = useState([]);
	const [categories, setCategories] = useState([]);
	const [userId, setUserId] = useState();
	const [total, setTotal] = useState(0);
	const [limit, setLimit] = useState(10);
	const navigate = useNavigate();
	

	// -Obtener usuarios
	async function getUsers(page = 0) {
		try {
			const response = await axios.get(
				`${URL}/users?page=${page}&limit=${limit}`,
			);
			const users = response.data.users;
			const total = response.data.total;

			setDbUsers(users);
			setTotal(total);
		} catch (error) {
			console.log(error);
			Swal.fire({
				title: 'No se pudieron obtener los Usuarios',
				icon: 'error',
			});
		}
	}
	async function deleteUser(id) {
		Swal.fire({
			title: 'Confirma borrar este usuario?',
			text: `Realmente desea borrar este usuario ${id}`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Borrar',
			cancelButtonText: 'Cancelar',
			confirmButtonColor: '#d33',
			reverseButtons: true,
		}).then(async function (resultado) {
			if (resultado.isConfirmed) {
				try {
					if (!TOKEN) return;
					console.log(`Usario a borrar ${id}`);

					// Borrar el usuario en la base de datos
					await axios.delete(`${URL}/users/${id}`, {
						headers: { authorization: TOKEN },
					});
					Swal.fire({
						title: 'Usuario Borrado',
						text: `El user con el ID:${id} fue borrado correctamente`,
						icon: 'success',
						timer: 2500,
					});
					// Debo actualizar el estado de mis usuarios, quitando el user que se borro.
					getUsers();
				} catch (error) {
					console.log(error);
					Swal.fire({
						title: 'No se pudo borrar el usuario',
						icon: 'error',
					});
					if (error.response.status === 401) return logout();
				}
			}
		});
	}

	function logout() {
		// logout();
		localStorage.removeItem('currentUser');
		localStorage.removeItem('token');
		navigate('/');
	}
	// Este USE EFFECT SE USA PARA LLAMAR A LA FUNCION GET USERS Y QUE NO SE HAGA UN BUCLE INFINITO.
	useEffect(
		() => {
			getUsers();
			getCategories();
		}, // Funcion que se ejecuta cuando se monta el componente
		[limit],
	);

	async function getCategories() {
		try {
			const response = await axios.get(`${URL}/categories`);
			const categoriesDB = response.data.categories;

			// Setear un estado que maneje las categorias
			setCategories(categoriesDB);
		} catch (error) {}
	}

	const { register, handleSubmit, setValue, reset } = useForm();

	// Obtener data del formulario y hacer un POST o un PUT
	async function submitedData(data) {
		try {
			const formData = new FormData();

			formData.append('name', data.name);
			formData.append('email', data.email);
			formData.append('password', data.password);
			formData.append('age', data.age);
			formData.append('location', data.location);
			// En la imagen se debe usar un for diferente.
			formData.append('image', data.image[0]);
			// el [0] en img es porque siempre la info que te brinda el FORMDATA de react-hook-form' la imagen esta en el i 0.

			if (userId) {
				if (!TOKEN) return;
				
				const response = await axios.put(`${URL}/users/${userId}`,  formData, {
					headers: {
						authorization: TOKEN,
					},
				});
				console.log(response)
				Swal.fire({
					title: 'Usuario Editado Correctamente',
					text: `El usuario ${response.data.user.name} fue editado correctamente`,
					icon: 'success',
				});
				getUsers();
				setUserId(null);
				reset()
				return true; // 
			}

			const response = await axios.post(`${URL}/users`, formData);
			
			Swal.fire({
				title: 'Usuario Creado',
				text: `El usuario ${response.data.user?.name} fue creado correctamente`,
				icon: 'success',
			});
			getUsers();
			setFormValue();
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
	useEffect(() => {
		getUsers();
	}, [userId]);

	function getDefaultValueForImage() {
		
		return '';
	}

	function setFormValue(user) {
		// Iteramos propiedades
		setValue('name', user?.name || '');
		setValue('email', user?.email || '');
		setUserId(user?._id || ''); 
		setValue('age', user?.age || '');
		setValue('image', user?.image !== undefined ? [user?.image] : getDefaultValueForImage());
		setValue('location', user?.location || '');
		setValue('role', user?.role || '');
		setValue('active', user?.active || '');
		setValue('observation', user?.observation || '');
	}

	// Esta func es para buscar especificamente los usuarios
	async function handleSearch(e) {
		try {
			const search = e.target.value;

			if (!search || search.length <= 2) getUsers();

			if (search.length <= 2) {
				return;
			}
			// Haccer una peticion a mi servidor para buscar usuarios.-
			const response = await axios.get(`${URL}/users/search/${search}`);

			const users = response.data.users;

			setDbUsers(users);
		} catch (error) {
			console.log(error);
		}
	}


	return (
	
		<Layout>
			<Cart/>
			<>
			<div className="main-container">
				<h1 className="main-title">Lista de Usuarios
					
				</h1>

        <div className="body-container">
            <div className="user-data-container">
				
                <form 
					id="user-data-form" 
					onSubmit={handleSubmit(submitedData)} 
					encType='multipart/form-data'>
						{userId && (
						<button
							className="btn btn-delete btn-right"
							onClick={() => setFormValue()}
								>
									x
								</button>
							)}

                    <input type="hidden" id="userId" name="userId"/>
					
                    <div className="input-group">
                        <label htmlFor="user">Nombre Completo</label><br/>
                        <input type="text" name="inputName" id="user" title="Ingrese Nombre Completo"
                        placeholder="John Doe" minLength="4" maxLength="50" autoFocus required
						{...register('name')}/>
                        
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="inputCorreo">Correo Electronico</label><br/>
                        <input type="email" name="email" id="email" minLength="6" maxLength="140"
                        placeholder="Johndoe@gmail.com" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$"
                        required
						{...register('email')}/>
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="image">Imagen</label>
                        <input type="file" name="image" id="image" accept="image/*" {...register('image')}/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Contraseña</label><br/>
                        <input 
							type="password" name="inputPassword" id="inputPassword" 
							minLength="5" 
							maxLength="20"
                            title="Debe tener entre 5 a 20 Caracteres y al menos 1 de cada elemento 'A-Z / Symbols / Numbers'"
                            placeholder="********" 
							pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
							disabled={userId}
							required
							{...register('password')}
							/>{' '}
                    </div>

                    <div className="input-group">
                        <label htmlFor="inputPassword2">Repetir Contraseña</label><br/>
                        <input type="password" name="inputPassword2" id="inputPassword2" minLength="5" maxLength="20"
                            title="Debe tener minimo 5 Caracteres y al menos 1 de cada elemento 'A-Z / Symbols / Numbers'"
                            placeholder="********" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required
							disabled={userId}
							{...register('password')}
							/>{' '}
                    </div>

                    <div className="input-group">
                        <label htmlFor="inputDate">Edad</label><br/>
                        <input type="number" name="inputDate" id="inputDate" 
						{...register('age')}/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="location">Seleccione su localidad</label><br/>
                        <select name="location" id="location"  {...register('location')}>
                            <option value="buenos_aires">Buenos Aires</option>
                            <option value="capital-federal">Capital Federal</option>
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
                            <option value="santiago_del_estero">Santiago del Estero</option>
                            <option value="tierra_del_fuego">Tierra del Fuego</option>
                            <option value="tucuman">Tucuman</option>
							
                        </select>
                    </div>

                    <div className="input-group">
                        <label htmlFor="role">Rol</label><br/>
                        <select name="role" id="role" {...register('role')} required>
                            <option value="USER_ROLE" >Usuario</option>
                            <option value="CLIENT_ROLE" >Cliente</option>
                            <option value="ADMIN_ROLE">Admin</option>
                        </select>

                    </div>

                    <div className="input-group">
                        <label htmlFor="active">Activo?</label><br/>
                        <select name="active" id="active" {...register('active')} required>
                            <option value="Activo">Activo</option>
                            <option value="No_Activo">No Activo</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label htmlFor="">Observacion</label><br/>
                        <textarea name="observation" id="observation" cols="25" rows="4" {...register('observation')}>
                        </textarea>
                    </div>

                    <div>
                        <button id="user-data-form-submit-btn" className={userId ? 'btn-success' : 'btn-form'} type="submit">
						{userId ? 'Editar Usuario' : 'Añadir Usuario'}</button>

                    </div>					

                </form>

            </div>


			<div className="table-container">
					{/* Tabla de mis usuarios para manejar el CRUD de los mismos */}
					<div className="flex-between">
						<h2 className= 'second-title'>Tabla de Usuarios</h2>
						<div className="imput-group">
							<input style={{ margin: "0.5rem auto"}} type="text" onKeyUp={handleSearch} />
						</div>
					</div>
					<UserTable
						users={dbUsers}
						deleteUser={deleteUser}
						setFormValue={setFormValue}
					/>
					<div className="pagination-container">
						{Array.from({ length: Math.ceil(total / limit) }).map((_, idx) => (
							<button key={idx} onClick={() => getUsers(idx)}>
								{idx + 1}
							</button>
						))}
					</div>
					<div>
						<select name="" id="" onChange={(e) => setLimit(e.target.value)}>
							<option value="10">10</option>
							<option value="20">20</option>
						</select>
					</div>
				</div>
        </div>
    </div>
	</>
		</Layout>
		
	) 

}
