import React, {createContext,useState} from 'react';
export const CartProvider = ({children}) => {
    const [Carrito, setCart] = useState([]);
    const addProduct = (product) => {
        if(isInCart(product)){
            let cartSession = getCart();
            const Cart2 = cartSession.map(prod => {
                if (prod.item.id === product.item.id) {
                    prod.quantity = prod.quantity+product.quantity;
                }
                
                return prod;
            }
            );
            setCart(Cart2);
            localStorage.setItem('Carrito', JSON.stringify(Cart2));
        }else{
            
            if(Carrito.length==0) {
                let cartS = getCart();
                setCart(cartS);
            } 
            setCart([...Carrito, product]);
            localStorage.setItem('Carrito', JSON.stringify([...Carrito, product]));
        }
    }
    const totalCart = () => {
        let Cart = getCart();
        let total = 0;
        Cart.map(prod => {
            total += prod.quantity*prod.item.precio;
        });
        return total;
    }
    const getCart = () => {
        const Cart = JSON.parse(localStorage.getItem('Carrito'));
        
        if (Cart) {
            return Cart;
        }else{
            return Carrito;
        }
    }
    const isInCart = (product) => {
        let Cart = getCart();
        if (Cart){
        let productoInCart = Cart.find(item => item.item.id === product.item.id);
        productoInCart ? productoInCart = true : productoInCart =false;
        return productoInCart
        }else{
            return false;
        }
    }
    const removeProduct = (id) => {
        if(Carrito.length == 0){
            let cartSession = getCart();
            setCart(cartSession); 
        }
        const Cart2 = Carrito.filter(product => product.item.id !== id);
        setCart(Cart2);
        localStorage.setItem('Carrito', JSON.stringify(Cart2));
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
        localStorage.setItem('Carrito', JSON.stringify(Carrito2));
    }
    const emptyCart = () => {
        localStorage.clear();
        setCart([]);
    }
    return (
        <CartContext.Provider value={[Carrito, addProduct, removeProduct, updateProduct, emptyCart, getCart, totalCart]}>
            {children}
        </CartContext.Provider>
    );
} 
export const CartContext = createContext();