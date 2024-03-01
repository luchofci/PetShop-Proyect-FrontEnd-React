import Banner from '../../components/banner/Banner';
import { ProductCardsContainer } from '../../components/productCardsContainer/productCardsContainer';
import Layout from '../../layout/layout';


export default function Home() {
	return (
		<Layout>
			<Banner />

			<div className="main-container">
				<ProductCardsContainer />
			</div>
    
		</Layout>
	);
}
