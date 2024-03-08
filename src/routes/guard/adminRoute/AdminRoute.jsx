import { Navigate } from "react-router-dom";
import { useUser } from "../../../context/UserContext";

export default function AdminRoute({ children }) {
	// obtuve del localStorage las si el usuario tiene rol ADMIN
	const { admin } = useUser();

	return admin ? children : <Navigate to="/" replace />;
}

