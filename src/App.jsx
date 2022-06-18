import { useState } from 'react'
import logo from './logo.svg'
import HeaderComponent from './componets/HeaderComponent.jsx'
import NavBar from './componets/NavBar.jsx'
import ItemListContainer from './componets/containers/ItemListContainer'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'


import './App.css'


function App() {
  return (
    <div className="App">
        <HeaderComponent />
        <NavBar view='home'/>
        <ItemListContainer listado="Listado de Productos" titulo="Productos Destacados"/>
      
    </div>
  )
}

export default App
