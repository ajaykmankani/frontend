import React, { useEffect } from 'react'
import Loader from '../components/layout/loader'
import MetaData from '../components/layout/MetaData'
import Product from './product/product'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import{ getProducts } from '../actions/productActions'

const Home = () => {

  const alert = useAlert()
  const dispatch = useDispatch()

  const { loading, products, error, productsCount } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getProducts())
    if(error) {
      alert.success('Success')
      return alert.error(error)
    }
  }, [dispatch, alert, error])
    return (
        <>
        {loading ? <Loader/> : (
          <>
           <MetaData title = {'Buy Best Products online'} /> 
            <h1 id="products_heading">Latest Products</h1>

<section id="products" className="container mt-5">
  <div className="row">

  {products && products.map(product=>(

    <Product key={product.id} product = {product} />

  ))}
    
  </div>
</section>
</>
)}
           
        </>
    )
}

export default Home