import { UserTableRow } from '../userTableRow/userTableRow'
import './userTable.css'

export const UserTable = ({ users, deleteUser, setFormValue }) => {

	
	return (
		<>
			<div className="table-container">
				<table className="table-admin">
					<thead>
						<tr>
							<th>imagen</th>
							<th>Nombre Completo</th>
							<th>Email</th>
							<th>Localidad</th>
							<th>Roll</th>
							<th>Active</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody>
						{users.map((usr) => (
							<UserTableRow 
							key={usr._id} 
							usr={usr} 
							deleteUser={deleteUser}
							setFormValue={setFormValue}/>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};