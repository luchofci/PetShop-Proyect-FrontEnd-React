import { Cart } from '../../components/cart/Cart';
import Layout from '../../layout/layout';
import './AboutUs.css';

export default function AboutUs() {
	return (
		<Layout>
			<Cart />
			<section className="about-section">
				<h1 className="aboutUs-title">Nosotros</h1>
				<p className="aboutUs-p">
					Somos una empresa apasionada por las mascotas y su
					bienestar.
				</p>
				<p className="aboutUs-p">
					Nuestra historia comenzó en 2018 cuando una pareja, amantes
					de los animales, decidió mudarse juntos y emprender esta
					hermosa aventura juntos.{' '}
				</p>
				<p className="aboutUs-p">
					Nuestra misión es proporcionar productos y servicios de alta
					calidad, como asi fomentar la adopcion responsable.
				</p>
				<p className="aboutUs-p">
					En PetShop by Tabu y Odin, nos regimos por valores
					fundamentales como la familia, la igualdad, el amor y el
					respeto a todos los seres vivos.
				</p>
			</section>

			<h2 className="aboutUs-title2">Nuestro Equipo</h2>
			<div className="row">
				<div className="column">
					<div className="card">
						<div className="card-img-container-aboutUs">
							<img
								className="card-img-aboutUs"
								srcSet="/src/assets/image/Tabu.jpeg"
								alt="Tabu"
								style={{ width: '100%' }}
							/>
						</div>
						<div className="container">
							<h2 className="aboutUs-title2">Tabu Comignaghi</h2>
							<span className="title">CEO & Founder</span>
							<br />
							<span>
								Encargado de monitorear las funciones de los
								asistentes.
							</span>
							<br />
							<br />
							<a href="mailto:tabu@example.com">
								tabu@example.com
							</a>
						</div>
					</div>
				</div>

				<div className="column">
					<div className="card">
						<div className="card-img-container-aboutUs">
							<img
								className="card-img-aboutUs"
								srcSet="/src/assets/image/Odin.jpeg"
								alt="Odin"
								style={{ width: '100%' }}
							/>
						</div>
						<div className="container">
							<h2 className="aboutUs-title2">Odin Comignaghi</h2>
							<span className="title">CEO & Founder</span>
							<br />
							<span>
								Encargado de juzgar a los clientes, segun las
								caricias que le brinden.
							</span>
							<br />
							<br />
							<a href="mailto:odin@example.com">
								odin@example.com
							</a>
						</div>
					</div>
				</div>

				<div className="column">
					<div className="card">
						<div className="card-img-container-aboutUs">
							<img
								className="card-img-aboutUs"
								srcSet="/src/assets/image/Luciano.jpeg"
								alt="Luciano Comignaghi"
								style={{ width: '100%' }}
							/>
						</div>
						<div className="container">
							<h2 className="aboutUs-title2">
								Luciano Comignaghi
							</h2>
							<span className="title">
								Assistant to the regional manager
							</span>
							<br />
							<span>
								Encargado del abastecimiento de insumos
								alimenticios, y desechos organicos de los CEO
							</span>
							<br />
							<br />
							<a href="mailto:luciano@example.com">
								luciano@example.com
							</a>
						</div>
					</div>
				</div>

				<div className="column">
					<div className="card">
						<div className="card-img-container-aboutUs">
							<img
								className="card-img-aboutUs"
								srcSet="/src/assets/image/The-Crew.jpeg"
								alt="Familia Comignaghi"
								style={{ width: '100%' }}
							/>
						</div>
						<div className="container">
							<h2 className="aboutUs-title2">
								The Crew Comignaghi
							</h2>
							<span className="title">Full crew</span>
							<br />
							<span>
								Este equipo, mas que equipo es una familia.{' '}
							</span>
							<br />
							<br />
							<a href="mailto:thecrew@example.com">
								thecrew@example.com
							</a>
						</div>
					</div>
				</div>
			</div>

			<section className="achievements-section">
				<h2>Nuestros Logros</h2>
				<ul>
					<li>1000+ clientes satisfechos</li>
					<li>5 años de experiencia en el mercado</li>
					<li>Proyectos exitosos como...</li>
				</ul>
			</section>
		</Layout>
	);
}
