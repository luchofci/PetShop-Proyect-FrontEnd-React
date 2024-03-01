import { useEffect, useState } from 'react';
import { ProductCard } from '../productCard/productCard';
import axios from 'axios';
import './productCardsContainer.css';

const URL = import.meta.env.VITE_SERVER_URL;

export const ProductCardsContainer = () => {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('All');
	const [filterKeyWord, setFilterKeyWord] = useState('');

	useEffect(function () {
		getProducts();
		getProductsCategories();
	}, []);

	useEffect(
		function () {
			setFilteredProducts(products);
		},
		[products]
	);

	useEffect(
		function () {
			filtrarProductos();
		},
		[selectedCategory, filterKeyWord]
	);

	async function getProducts() {
		try {
			// Pedido al backen de los productos para luego pintarlos.
			const response = await axios.get(`${URL}/products`);

			console.log(response);
			setProducts(response.data.products);
		} catch (error) {
			console.log(error);
		}
	}

	async function getProductsCategories() {
		try {
			// Pedido al backen de los categorias para luego pintarlos.
			const response = await axios.get(`${URL}/categories`);

			setCategories(response.data.categories);
		} catch (error) {
			console.log(error);
		}
	}

	function handleFiltrarPorCategoria(event) {
		const selectedValue = event.target.value;
		setSelectedCategory(selectedValue);
	}

	function handleFiltrarPorNombre(event) {
		const inputValue = event.target.value.toLowerCase();
		setFilterKeyWord(inputValue);
	}

	function filtrarProductos() {
		if (selectedCategory == 'All' && filterKeyWord == '') {
			setFilteredProducts(products);
		} else {
			const aux = products.filter((product) => {
				if (
					selectedCategory == 'All' &&
					product.frontName.toLowerCase().includes(filterKeyWord)
				) {
					return true;
				} else if (
					filterKeyWord == '' &&
					selectedCategory == product.category._id
				) {
					return true;
				} else if (
					selectedCategory == product.category._id &&
					product.frontName.toLowerCase().includes(filterKeyWord)
				) {
					return true;
				} else {
					return false;
				}
			});
			setFilteredProducts(aux);
		}
	}

	return (
		<>
			<h1>Productos</h1>
			<div className="main-products-filter">
				<select
					id="select-products-categories"
					onChange={handleFiltrarPorCategoria}
				>
					"<option value="All">Todos</option>
					{categories.map((category) => {
						return (
							<option value={category._id} key={category._id}>
								{category.name}
							</option>
						);
					})}
				</select>
				<input
					type="text"
					id="product-keyword"
					placeholder="Filtrar por Nombre"
					onKeyUp={handleFiltrarPorNombre}
				/>
			</div>
			<div className="card-container">
				{filteredProducts.length > 0 ? (
					filteredProducts.map((product) => {
						return (
							<ProductCard product={product} key={product._id} />
						);
					})
				) : (
					<div>"No hay resultados para estos filtros"</div>
				)}
			</div>
		</>
	);
};
