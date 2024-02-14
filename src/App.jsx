import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import AboutUs from './pages/aboutUs/AboutUs';
import Login from './pages/login/Login';
import Contact from './pages/contact/Contact';
import AdminProduct from './pages/adminProduct/AdminProduct';
import AdminUser from './pages/adminUser/AdminUser';
import AdminRoute from './guard/adminRoute/AdminRoute';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';

function App() {
	return (
		<>
			<Header />

			<main className="">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/register" element={<Register />} />
					<Route path="/about-us" element={<AboutUs />} />
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
						path="/admin-product"
						element={
							<AdminRoute>
								{' '}
								<AdminUser />{' '}
							</AdminRoute>
						}
					/>
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
