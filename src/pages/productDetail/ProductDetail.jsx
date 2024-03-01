import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../../layout/layout';

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
			<h1>{product.frontName}</h1>
            <p>{product.frontDescription}</p>
            <h2>{product.backtName}</h2>
			<p>{product.backDescription}</p>
			<p>{product.price}</p>
		</Layout>
	);
};
