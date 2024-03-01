import "./Login.css";
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import Layout from "../../layout/layout";

const URL = import.meta.env.VITE_SERVER_URL;

export default function Login() {
	
	const navigate = useNavigate()

	function handleSubmit(event){
		event.preventDefault();
		const el = event.target.elements;

		const data = {
			email: el.email.value,
			password: el.password.value
		}

		login(data)
	}
	
	async function login(data){
		try{
			const response = await axios.post(`${URL}/login`, data);

			const {token, user} = response.data;

			localStorage.setItem('token', token)
			localStorage.setItem('currentUser', JSON.stringify(user))
			
			Swal.fire({
				title:'Login Correcto',
				text:'Sera redireccionado correctamente',
				icon:'success',
				timer:1500
			}).then(()=>{
				navigate("/")
			})

		}catch (error) {
			console.log(error);
			Swal.fire({
				title:"Error al ingresar",
				text: 'Alguno de los datos ingresados no es correcto',
				icon:'error',
			})
		}
	}
	
	
	
	
	return (
		<Layout>
		<div className="formulario-container">
        <h1>LOGIN</h1>
        <hr/>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="inputName">Email</label><br/>
                <input 
                    type="email" 
                    name="inputEmail" 
                    id="inputEmail" 
                    title="Ingrese Email"
                    placeholder="JohnDoe@example.com"
                    minLength="4"
                    maxLength="50"
                    autoFocus
                    required/>
            </div>
            <div>
                <label htmlFor="inputPassword">Contraseña</label><br/>
                <input 
                    type="password"
                    name="inputPassword"
                    id="inputPassword"
                    minLength="3"
                    maxLength="20"
                    title="Ingrese Contraseña"
                    placeholder="******"
                    required/>
            </div>
            <div>
                <button type="submit">Ingresar</button>
                
            </div>
        </form>
        <br/>
        <br/>
        <hr/>
    </div>
		</Layout>

	)
	
}
