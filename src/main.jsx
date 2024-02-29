import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Libreria para poder acceder a las rutas.-
import { BrowserRouter } from 'react-router-dom'

// import { OrderProvider } from './context/OrderContext.jsx'
// import { UserProvider } from "./context/UserContext.jsx"



ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
		{/* <UserProvider> */}
				{/* <OrderProvider> */}
					<App />
				{/* </OrderProvider> */}
			{/* </UserProvider> */}
		</BrowserRouter>
	</React.StrictMode>
);
