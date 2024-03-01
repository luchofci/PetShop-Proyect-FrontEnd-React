import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/home/Home';
import Register from '../pages/register/Register';
import Contact from '../pages/contact/Contact';
import AboutUs from '../pages/aboutUs/AboutUs';
import Adopta from '../pages/adopta/Adopta';
import Login from '../pages/login/Login';
import AdminProduct from '../pages/adminProduct/AdminProduct';
import AdminUser from '../pages/adminUser/AdminUser';
import AdminRoute from './guard/adminRoute/AdminRoute';

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/register" element={<Register />} />
			<Route path="/about-us" element={<AboutUs />} />
			<Route path="/adopta" element={<Adopta />} />
			{/* <Route path='product-detail/:id' element={<ProductDetail/>}/> */}
			<Route path="/login" element={<Login />} />

			<Route
				path="/admin-product"
				element={
					<AdminRoute>
						{' '}
						<AdminProduct />{' '}
					</AdminRoute>
				}
			/>
			<Route
				path="/admin-user"
				element={
					<AdminRoute>
						{' '}
						<AdminUser />{' '}
					</AdminRoute>
				}
			/>
            <Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
}
