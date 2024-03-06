import './Footer.css';

export default function Footer() {
	return (
		<>
			<footer className="main-footer">
				<section className="footer-section1">
					<div>
						<p className='direccion'>Direcciones a Jardín Botánico</p>
						<p>Av. Las Heras 4164-4238
						(Distrito Federal)</p>
						<p className="direccion"> Tel: 11.1.234.5478 </p>
					</div>
				</section>
				<section className="footer-section2">
					<div>
						<img
							className="footer-logo"
							srcSet='/src/assets/image/Logo-Nav.png'
							alt="Footer Logo"
						/>
					</div>
				</section>
				<section className="footer-section3">
					<div>
						<a className="footer-link" href="">
							<img
								className="logo-IG"
								srcSet="/src/assets/image/FOTO-IG-TRANSPARENTE.png"
								alt="logo-insta"
							/>
							@PetShopbyTabuyOdin
						</a>
					</div>
					<div>
						<a className="footer-link" href="">
							<img
								className="logo-YT"
								srcSet="/src/assets/image/FOTO-YT-LOGO.png"
								alt="logo-youtube"
							/>{' '}
							@PetShopbyTabuyOdin
						</a>
					</div>
					<div>
						<a className="footer-link" href="">
							<img
								className="logo-FB"
								srcSet="/src/assets/image/Logo-FB.png"
								alt="logo-fb"
							/>
							@PetShopbyTabuyOdin
						</a>
					</div>
				</section>
			</footer>
		</>
	);
}
