import { useState } from 'react'
import MainRoute from './AllRoutes/MainRoute'
import './App.css'
import data from './backend/Data'
import Navbar from './Components/Navbar'

function App() {
  const { productItems } = data
  const [crt, setCrt] = useState([])

  const handleAddProduct = (product) =>{
    const productExist = crt.find((item) => item.id === product.id)
    // console.log(crt,"sssss")
    if (productExist) {
      setCrt(
        crt.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      )
    } else {
      
      setCrt([...crt, { ...product, quantity: 1 }])
     
    }
    
  }
  console.log(crt)
  const handleRemoveProduct = (product) => {
    const productExist = crt.find((item) => item.id === product.id)
    if (productExist.quantity === 1) {
      setCrt(crt.filter((item) => item.id !== product.id))
    } else {
      setCrt(
        crt.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item,
        ),
      )
    }
  }
 
  return (
    <div className="App">
      <Navbar />
      <MainRoute
        productItems={productItems}
        crt={crt}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        
      />
    </div>
  )
}

export default App
