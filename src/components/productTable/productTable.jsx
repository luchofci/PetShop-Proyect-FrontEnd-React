import { ProductTableRow } from '../productTableRow/productTableRow';
import './productTable.css';

export const ProductTable = ({ products, deleteProduct, setFormValue }) => {
	return (
		<>
			<div className="table-container">
				<table className="table-admin">
					<thead>
						<tr>
							<th>imagen</th>
							<th>ID</th>
							<th>Front Name Product </th>
							<th>Front Description </th>
							<th>Back Name Product</th>
							<th>Back Description</th>
							<th>Price</th>
							<th>Details</th>
							<th>Category</th>
							<th>Stock</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>						
						{products.map((prod) => (
							<ProductTableRow 
							key={prod._id} 
							prod={prod} 
							deleteProduct={deleteProduct}
							setFormValue={setFormValue}/>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};
