import { createContext, useContext, useEffect, useState } from 'react';
// import { useUser } from '@/context/UserContext';
import { useUser } from './UserContext'
import axios from 'axios';
import Swal from 'sweetalert2';


const URL = import.meta.env.VITE_SERVER_URL;
const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {

    const { user } = useUser();
	const [order, setOrder] = useState(()=> JSON.parse(localStorage.getItem("order")) || []);
	const [cartMenu, setCartMenu] = useState(false); 
	const [total, setTotal] = useState(0);
	const[totalItems, setTotalItems]=useState(0)

	useEffect(()=>{
		calculateTotalItems();
		calculatetTotal();
	}, [order]);



    function addItem(item){
        const itemIndex = order.findIndex((prod) =>prod.productId === item._id);
        let newOrder;
        if(itemIndex >= 0){
            newOrder = order.map((producto)=>{
                if(producto.productId === item._id){
					return { ...producto, quantity: producto.quantity + 1}
					// a ese producto le agrego la cantidad +1
				}
				return producto;
			});
        }else{
            const product = {
				// schema de orden
				productId: item._id,
				quantity: 1,
				price: item.price,
				productName: item.frontName,
				image: item.image,
				};	
				newOrder = [ ...order, product]		
			}
			localStorage.setItem("order", JSON.stringify(newOrder));
			setOrder(newOrder);
	}
    
    function calculateTotalItems(){
        let totalItems = 0;
		order.forEach( (prod) =>{
			totalItems += prod.quantity
		})
        setTotalItems(totalItems);
	}

	function calculatetTotal() {
		let total = 0;

		order.forEach((prod)=>{
			total += prod.price * prod.quantity
		})
		setTotal(total);
	}

	async function finishOrder(){
		try{
			if (!user)
			return Swal.fire({
		icon:"error",
		title: "Oops...",
		text:"Debes iniciar sesion para finalizar la compra", 
	});
	
	const { _id: userId } = user;
	const products = order.map((prod)=>{
		return{
			productId: prod.productId,
			quantity: prod.quantity,
			price: prod.price,
		};
	});
	// Estos valores de newOrder, estan basados en el Schema del backend
	const newOrder = {
		userId,
		products,
		total,
	};
	
	const response = await axios.post(`${URL}/orders`, newOrder);
	
	if(response.status === 201){
		Swal.fire({
			icon: "success",
			title:"Compra realizada",
			text:"Gracias por su compra",
		});
		clearCart();
	}}catch(error){
		console.log(error);
		Swal.fire({
			icon: "error",
			title: "Oops..",
			text: "Algo salio mal!",
		});
	}
    }

    function removeItem(id) {
        setOrder((prevOrder) => {
            const updatedOrder = prevOrder.filter(producto => producto.productId !== id);
            localStorage.setItem("order", JSON.stringify(updatedOrder));
        return updatedOrder;
        });
    }

	function clearCart() {
		setOrder([]);
	}

	function toggleMenu() {
		setCartMenu(!cartMenu); 
	}




    return(
        <OrderContext.Provider
            value={{
                order,
				cartMenu,
				total,
				totalItems,
				addItem,
				removeItem,
				clearCart,
				toggleMenu,
				finishOrder,
            }}
        >
            {children}
        </OrderContext.Provider>
    )

};

export default OrderProvider;
