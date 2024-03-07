import Banner from '../../components/banner/Banner';
import { Cart } from '../../components/cart/Cart';
import { Features } from '../../components/features/features';
import { ProductCardsContainer } from '../../components/productCardsContainer/productCardsContainer';
import Layout from '../../layout/layout';
import './Home.css'



export default function Home() {
	return (
		<Layout>
			<Banner />
			<Cart/>
			<div className="main-container">
				<ProductCardsContainer />
				<Features/>
			</div>
    
		</Layout>
	);
}
