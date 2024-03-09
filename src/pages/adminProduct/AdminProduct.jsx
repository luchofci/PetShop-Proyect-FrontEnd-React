import './adminProduct.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import Layout from '../../layout/layout';

import { useForm } from 'react-hook-form';
import { ProductTable } from '../../components/productTable/productTable';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URL = import.meta.env.VITE_SERVER_URL;
const TOKEN = localStorage.getItem('token');

export default function AdminProduct() {
	const { register, handleSubmit, setValue } = useForm();

	const [dbProducts, setDbProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [productId, setProductId] = useState();
	const [total, setTotal] = useState(0);
	const [limit, setLimit] = useState(10);
	const navigate = useNavigate();

	async function getProducts(page = 0) {
		try {
			const response = await axios.get(
				`${URL}/products?page=${page}&limit=${limit}`
			);
			const products = response.data.products;
			const total = response.data.total;

			setDbProducts(products);
			setTotal(total);
		} catch (error) {
			console.log(error);
			Swal.fire({
				title: 'No se pudieron obtener los Productos',
				icon: 'error',
			});
		}
	}

	async function handleSearch(e) {
		try {
			const search = e.target.value;

			if (!search || search.length <= 2) getProducts();

			if (search.length <= 2) {
				return;
			}
			// Haccer una peticion a mi servidor para buscar producto.-
			const response = await axios.get(
				`${URL}/products/search/${search}`
			);

			const products = response.data.products;

			setDbProducts(products);
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(
		() => {
			getProducts();
			getCategories();
		}, // Funcion que se ejecuta cuando se monta el componente
		[limit]
	);

	async function deleteProduct(id) {
		Swal.fire({
			title: 'Confirma borrar este producto?',
			text: `Realmente desea borrar este producto ${id}`,
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
					console.log(`Producto a borrar ${id}`);

					// Borrar el producto en la base de datos
					await axios.delete(`${URL}/products/${id}`, {
						headers: { authorization: TOKEN },
					});
					Swal.fire({
						title: 'Producto Borrado',
						text: `El producto con el ID:${id} fue borrado correctamente`,
						icon: 'success',
						timer: 2500,
					});

					getProducts();
				} catch (error) {
					console.log(error);
					Swal.fire({
						title: 'No se pudo borrar el producto',
						icon: 'error',
					});
					// if (error.response.status === 401) return logout();
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

	async function getCategories() {
		try {
			const response = await axios.get(`${URL}/categories`);
			const categoriesDB = response.data.categories;
			console.log(categoriesDB);

			// Setear un estado que maneje las categorias
			setCategories(categoriesDB);
		} catch (error) {
			console.log(error);
		}
	}

	async function submitedData(data) {
		try {
			const formData = new FormData();

			formData.append('frontName', data.frontName);
			formData.append('frontDescription', data.frontDescription);
			formData.append('backtName', data.backtName);
			formData.append('backDescription', data.backDescription);
			formData.append('price', data.price);
			formData.append('image', data.image[0]);
			formData.append('details', data.details);
			formData.append('category', data.category);
			formData.append('stock', data.stock);

			// Ver el product Id
			if (productId) {
				if (!TOKEN) return;
				// Me falta aniadir el token
				const response = await axios.put(
					`${URL}/products/${productId}`,
					formData,
					{
						headers: {
							authorization: TOKEN,
						},
					}
				);
				Swal.fire({
					title: 'Producto Editado Correctamente',
					text: `El producto ${response.data.product.frontName} fue editado correctamente`,
					icon: 'success',
				});
				getProducts();
				setProductId(null);
				return;
			}

			const response = await axios.post(`${URL}/products`, formData);
			Swal.fire({
				title: 'Product Creado',
				text: `El producto ${response.data.product?.frontName} fue creado correctamente`,
				icon: 'success',
			});
			getProducts();
			setFormValue();
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: 'error',
				title: 'No se creo producto',
				text: 'Alguno de los datos ingresados no es correcto',
			});
			// if (error.response.status === 401) return logout();
		}
	}

	function setFormValue(product) {
		// Iteramos propiedades
		setProductId(product?._id || '');
		setValue('frontName', product?.frontName || '');
		setValue('frontDescription', product?.frontDescription || '');
		setValue('backtName', product?.backtName || '');
		setValue('backDescription', product?.backDescription || '');
		setValue('price', product?.price || '');
		setValue('image', product?.image || '');
		setValue('details', product?.details || '');
		setValue('category', product?.category || '');
		setValue('stock', product?.stock || '');
	}

	return (
		<Layout>
			<main className="main-container">
				<h1 className="main-title">Lista de Productos</h1>

				<div className="body-container">
					{/* container de todo */}

					<div className="product-data-container">
						{/* container del form */}

						<form
							className="product-data-form"
							id="product-data-form"
							onSubmit={handleSubmit(submitedData)}
							encType="multipart/form-data"
						>
							{productId && (
								<button
									className="btn btn-delete btn-right"
									onClick={() => setFormValue()}
								>
									x
								</button>
							)}

							<input
								type="hidden"
								id="productId"
								name="productId"
							/>

							<div className="input-group">
								<label htmlFor="image">Imagen</label>
								<input
									type="file"
									name="image"
									id="image"
									accept="image/*"
									{...register('image')}
								/>
							</div>

							<div className="input-group">
								<label htmlFor="frontName">
									Front Name Product
								</label>
								<br />
								<input
									type="text"
									name="frontName"
									id="frontName"
									title="Ingrese Nombre Completo"
									placeholder="Nombre Producto"
									minLength="1"
									maxLength="50"
									autoFocus
									required
									{...register('frontName')}
								/>
							</div>

							<div className="input-group">
								<label htmlFor="frontDescription">
									Front Description
								</label>
								<br />
								<textarea
									name="frontDescription"
									id="frontDescription"
									cols="25"
									rows="4"
									{...register('frontDescription')}
								></textarea>
							</div>

							<div className="input-group">
								<label htmlFor="backtName">
									Back Name Product
								</label>
								<br />
								<input
									type="text"
									name="backtName"
									id="backtName"
									title="Ingrese Nombre Completo"
									placeholder="Nombre Producto Back"
									minLength="1"
									maxLength="50"
									autoFocus
									required
									{...register('backtName')}
								/>
							</div>

							<div className="input-group">
								<label htmlFor="backDescription">
									Back Description
								</label>
								<br />
								<textarea
									name="backDescription"
									id="backDescription"
									cols="25"
									rows="4"
									{...register('backDescription')}
								></textarea>
							</div>

							<div className="input-group">
								<label htmlFor="price">Precio:</label>
								<input
									type="number"
									id="price"
									name="price"
									step="0.01"
									required
									{...register('price')}
								/>
							</div>

							<div className="input-group">
								<label htmlFor="details">
									Detalles del Producto:
								</label>
								<textarea
									id="details"
									name="details"
									rows="4"
									required
									{...register('details')}
								></textarea>
							</div>

							<div className="input-group">
								<label htmlFor="category">Categoría:</label>
								<select
									id="category"
									name="category"
									required
									{...register('category')}
								>
									<option value="productosSecos">
										Alimento Seco para Gatos
									</option>
									<option value="productosHumedos">
										Alimento humedo para Gatos
									</option>
								</select>
							</div>

							{/* <div className="input-group">
                        <label htmlFor="numero_orden">Número de Orden:</label>
                        <input type="text" id="numeroOrden" name="numeroOrden" required {...register('category')}/>
                    </div> */}

							<div className="input-group">
								<label htmlFor="stock">
									Cantidad de Stock:
								</label>
								<input
									type="number"
									id="stock"
									name="stock"
									required
									{...register('stock')}
								/>
							</div>

							<div>
								<button
									id="product-data-form-submit-btn"
									className="btn-form"
									type="submit"
								>
									Agregar Producto
								</button>
							</div>
						</form>
					</div>

					<div className="table-container">
						{/* Tabla de mis productos para manejar el CRUD de los mismos */}
						<div className="flex-between">
							<h2 className="second-title">Tabla de Productos</h2>
							<div className="imput-group">
								<input
									style={{ margin: '0.5rem auto' }}
									type="text"
									onKeyUp={handleSearch}
								/>
							</div>
						</div>
						<ProductTable
							products={dbProducts}
							deleteProduct={deleteProduct}
							setFormValue={setFormValue}
						/>
						<div className="pagination-container">
							{Array.from({
								length: Math.ceil(total / limit),
							}).map((_, idx) => (
								<button
									key={idx}
									onClick={() => getProducts(idx)}
								>
									{idx + 1}
								</button>
							))}
						</div>
						<div>
							<select
								name=""
								id=""
								onChange={(e) => setLimit(e.target.value)}
							>
								<option value="10">10</option>
								<option value="20">20</option>
							</select>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	);
}
