import {BrowserRouter,Route,Routes} from 'react-router-dom'

import ItemDetailContainer from './componets/containers/ItemDetailContainer'
import Cart from './componets/containers/Cart'

import HeaderComponent from './componets/HeaderComponent.jsx'
import NavBar from './componets/NavBar.jsx'
import ItemListContainer from './componets/containers/ItemListContainer'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { CartProvider } from './CartContex' //Importamos el contexto de nuestro carrito

import './App.css'


function App() {
  return (
    <CartProvider>
      <div className="App">
            <BrowserRouter>
              <div>
                <HeaderComponent />
                <NavBar/>
                <Routes>
                  <Route index path="/" element={<ItemListContainer listado={'Listado de Productos'} titulo={'Productos Destacados'}/>}/>
                  <Route index path="/:categoria" element={<ItemListContainer listado={'Listado de Productos'} titulo={'Productos Destacados'}/>}/>
                  <Route path="/detail/:id" element={<ItemDetailContainer />}/>
                  <Route path="/cart" element={<Cart />}/>
                </Routes>
              </div>
            </BrowserRouter>          
      </div>
    </CartProvider>
  )
}

export default App
