import React, {createContext,useState} from 'react';



export const CartProvider = ({children}) => {
    const [Carrito, setCart] = useState([]);


 
    const addProduct = (product) => {
        
       
        if(isInCart(product)){
            const Cart2 = Carrito.map(prod => {
                if (prod.item.id === product.item.id) {
                    prod.quantity = prod.quantity+product.quantity;
                }
                return prod;
            }
            );
            setCart(Cart2);
        }else{

            setCart([...Carrito, product]);
        }
        
    }

    const isInCart = (product) => {
        let productoInCart = Carrito.find(item => item.item.id === product.item.id);
        productoInCart ? productoInCart = true : productoInCart =false;
        return productoInCart
    }

    const removeProduct = (id) => {
        const Cart2 = Carrito.filter(product => product.item.id !== id);
        setCart(Cart2);
    }
    const updateProduct = (id, cantidad) => {
        const Carrito2 = Carrito.map(product => {
            if (product.id === id) {
                product.cantidad = cantidad;
            }
            return product;
        }
        );
        setCart(Carrito2);
    }

    const emptyCart = () => {
        setCart([]);
    }



    return (
        <CartContext.Provider value={[Carrito, addProduct,removeProduct,updateProduct,emptyCart]}>
            {children}
        </CartContext.Provider>
    );
} 

export const CartContext = createContext();