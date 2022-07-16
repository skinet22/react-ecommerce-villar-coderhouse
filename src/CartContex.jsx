import React, {createContext,useState} from 'react';

const ProductsInCart = [
    {id:2345,nombre:"Monitor",precio:200,cantidad:1,},
    {id:2346,nombre:"Teclado",precio:100,cantidad:1,},
    {id:2347,nombre:"Mouse",precio:50,cantidad:1,},
    {id:2348,nombre:"Impresora",precio:300,cantidad:1,},
    {id:2349,nombre:"Scanner",precio:150,cantidad:1,},
    {id:2350,nombre:"Router",precio:100,cantidad:1,},
];


export const CartProvider = ({children}) => {
    const [Products, setCart] = useState(ProductsInCart);


    const addProduct = (product) => {
        const newProducts = [...Products, product];
        setCart(newProducts);
    }
    const removeProduct = (id) => {
        const newProducts = Products.filter(product => product.id !== id);
        setCart(newProducts);
    }
    const updateProduct = (id, cantidad) => {
        const newProducts = Products.map(product => {
            if (product.id === id) {
                product.cantidad = cantidad;
            }
            return product;
        }
        );
        setCart(newProducts);
    }

    const emptyCart = () => {
        setCart([]);
    }



    return (
        <CartContext.Provider value={[Products, setCart]}>
            {children}
        </CartContext.Provider>
    );
} 

export const CartContext = createContext();