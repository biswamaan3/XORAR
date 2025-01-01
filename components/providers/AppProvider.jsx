"use client"
const {createContext, useState, useEffect, useContext} = require("react");

const AppContext = createContext();

const AppProvider = ({children}) => {
	const [cart, setCart] = useState([]);
	const [favourites, setFavourites] = useState([]);
    const [loading, setLoading] = useState(true);

	const [error, setError] = useState({show: false, msg: "", type: ""});

    useEffect(()=>{
        function fetchData(){
            const cart = localStorage.getItem("cart");
            const favourites = localStorage.getItem("favourites");
            if(cart){
                setCart(JSON.parse(cart));
            }
            if(favourites){
                setFavourites(JSON.parse(favourites));
            }
        }
        fetchData()
    },[])


    const increaseQuantity = (id) => {
        try {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return {...item, quantity: item.quantity + 1};
                }
                return item;
            });
            setCart(newCart);
            localStorage.setItem("cart", JSON.stringify(newCart));
        } catch (error) {
            console.log(error);
            setError({
                show: true,
                msg: "An error occurred while increasing quantity",
                type: "error",
            });
        }
    }

    const decreaseQuantity = (id) => {
        try {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return {...item, quantity: item.quantity - 1};
                }
                return item;
            });
            setCart(newCart);
            localStorage.setItem("cart", JSON.stringify(newCart));
        } catch (error) {
            console.log(error);
            setError({
                show: true,
                msg: "An error occurred while increasing quantity",
                type: "error",
            });
        }
    }




	const addToCart = (product) => {
		try {
			setCart([...cart, product]);
			localStorage.setItem("cart", JSON.stringify([...cart, product]));
		} catch (error) {
			console.log(error);
			setError({
				show: true,
				msg: "An error occurred while adding to cart",
				type: "error",
			});
		}
	};

	const removeFromCart = (id) => {
		try {
			const newCart = cart.filter((item) => item.id !== id);
			setCart(newCart);
			localStorage.setItem("cart", JSON.stringify(newCart));
		} catch (error) {
			console.log(error);
			setError({
				show: true,
				msg: "An error occurred while removing from cart",
				type: "error",
			});
		}
	};

	const addToFavourites = (product) => {
		try {
			setFavourites([...favourites, product]);
			localStorage.setItem(
				"favourites",
				JSON.stringify([...favourites, product])
			);
		} catch (error) {
			console.log(error);
			setError({
				show: true,
				msg: "An error occurred while adding to favourites",
				type: "error",
			});
		}
	};

	const removeFromFavourites = (id) => {
		try {
			const newFavourites = favourites.filter((item) => item.id !== id);
			setFavourites(newFavourites);
			localStorage.setItem("favourites", JSON.stringify(newFavourites));
		} catch (error) {
			console.log(error);
			setError({
				show: true,
				msg: "An error occurred while removing from favourites",
				type: "error",
			});
		}
	};

	return (
		<AppContext.Provider
			value={{
				cart,
				favourites,
				error,
				addToCart,
				removeFromCart,
				addToFavourites,
				removeFromFavourites,
                increaseQuantity,
                decreaseQuantity,
				loading
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;

export const useAppContext = () => {
	return useContext(AppContext);
};
