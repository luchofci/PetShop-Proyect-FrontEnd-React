import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Layout from '../../layout/layout';
import './ProductDetail.css'

const URL = import.meta.env.VITE_SERVER_URL;

export const ProductDetail = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});

	useEffect(() => {
		getProductDetail(id);
	}, [id]);

	async function getProductDetail(id) {
		try {
			const response = await axios.get(`${URL}/products/${id}`);

			const product = response.data.product;

			setProduct(product);
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<Layout>
			<div className="product-detail-container">

			{product.image && (
				<img
				className="product-image"
				src={`${URL}/images/products/${product.image}`}
				alt={product.frontName}
				/>
				)}
			<h1 className="product-title">{product.frontName}</h1>
			<p className="product-description">{product.frontDescription}</p>
			<h2 className="back-title">{product.backtName}</h2>
			<p className="back-description">{product.backDescription}</p>
			<p className="product-price">${product.price}</p>
			<Link className="link-back" to="/products">
          &#8592; Volver a la lista de productos
        </Link>
        <button className="button-buy">Comprar</button>
			</div>
		</Layout>
	);
};
export default ProductDetail;
