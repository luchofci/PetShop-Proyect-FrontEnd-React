import defaultProductPicture from '../../assets/image/default-product.png';
import './productTableRow.css';

const URL = import.meta.env.VITE_SERVER_URL;

export const ProductTableRow = ({ prod, deleteProduct, setFormValue }) => {
	return (
		<tr key={prod._id}>
				<td className="table-img">
					<img
						src={prod.image ? `${URL}/images/products/${prod.image}` : defaultProductPicture}
						alt={`${prod.name} product picture`}
					/>
				</td>
				<td className="table-ID">{prod._id}</td>
				<td className="table-rol">{prod.frontDescription}</td>
				<td className="table-rol">{prod.frontName}</td>
				<td className="table-rol">{prod.backtName}</td>
				<td className="table-rol">{prod.backDescription}</td>
				<td className="table-rol">{prod.price}</td>
				<td className="table-rol">{prod.details}</td>
				<td className="table-rol">{prod.category.name}</td>
				<td className="table-rol">{prod.stock}</td>

				<td className="table-actions">
					<div className='btn-container'>
					<button className="btn btn-delete" onClick={()=>deleteProduct(prod._id)}>
						<i className="fa-solid fa-trash"></i>
					</button>
					<button className="btn btn-edit" onClick={()=>setFormValue(prod)}>
						<i className="fa-solid fa-pencil"></i>
					</button>

					</div>

				</td>
			</tr>

		
	);
};
