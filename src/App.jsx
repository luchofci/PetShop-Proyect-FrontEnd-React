import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import AboutUs from './pages/aboutUs/AboutUs';
import Login from './pages/login/Login';
import Contact from './pages/contact/Contact';
// import Adopta from './pages/adopta/Adopta';
import AdminProduct from './pages/adminProduct/AdminProduct';
import AdminUser from './pages/adminUser/AdminUser';
import AdminRoute from './guard/adminRoute/AdminRoute';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';

// import { Cart } from "./Layout/Cart/Cart"
// import { ProductDetail } from './Pages/ProductDetail/ProductDetail'

function App() {
	return (
		<>
			<Header />
			{/* <Cart/> */}
			<main className="">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/register" element={<Register />} />
					<Route path="/about-us" element={<AboutUs />} />
					{/* <Route path="/adopta" element={<Adopta />} /> */}
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
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
