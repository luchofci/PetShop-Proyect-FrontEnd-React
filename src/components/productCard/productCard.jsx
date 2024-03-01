import { Link } from 'react-router-dom';
import './productCard.css';
import productDefault from '../../assets/image/default-product.png';
// VER FUNCIION
// VER CONTEXTO
// VER CLASES
const URL = import.meta.env.VITE_SERVER_URL;

export const ProductCard = ({ product }) => {
	return (
		<article className="thecard">
			<div className="thefront">
				<img
					className="card-img"
					src={
						product.image
							? `${URL}/images/products/${product.image}`
							: productDefault
					}
					alt={product.image}
					loading="lazy"
				/>
				<div className="card-body">
					<h2 className="card-title">{product.frontName}</h2>
					<p className="card-description">
						{product.frontDescription}
					</p>
					<div className="card-values">
						<div className="card-age">{product.details}</div>
						<div className="card-price">${product.price}.-</div>
					</div>
				</div>
				<footer className="card-footer">
					<a href="#" className="card-btn-vm">
						Ver mas
					</a>
					<button className="card-btn-buy">Comprar</button>
				</footer>
			</div>
			<div className="theback">
				<div className="card-info">
					<h3 className="card-info-title">{product.backtName}</h3>
					<p className="card-info-text">
                        <span dangerouslySetInnerHTML={{__html:product.backDescription}}>
                        </span>
                    </p>
				</div>
				<div>
					<div className="card-values">
						<div className="card-age">{product.details}</div>
						<div className="card-price-back">
							${product.price}.-
						</div>
					</div>
					<footer className="card-footer">
						<a href="#" className="card-btn-vm-back">
							Ver mas
						</a>
						<button className="card-btn-buy-back">
							<a href="">Comprar</a>
						</button>
					</footer>
				</div>
			</div>
		</article>
	);
};
