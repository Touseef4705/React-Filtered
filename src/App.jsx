import React from 'react'
import './App.css'
import { useEffect } from 'react'
import { useState } from 'react'
import Carts from './Component/Carts'

function App() {

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState(0)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((product) => setProducts(product))
      .catch((err) => console.log(err))
  }, [])

  const filterProducts = products
    .filter(products =>
      products.title.toLowerCase().includes(search.toLowerCase())
    )

    .filter(products =>
      products.category.toLowerCase().includes(category.toLowerCase())
    )
    .filter(products =>
      products.price >= price
    )


  return (
    <>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-slate-100 shadow-lg rounded-md">
        <input
          type="text"
          placeholder="Search Products"
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-64 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        />

        <select
          onChange={(e) => setCategory(e.target.value)}
          className="w-full md:w-64 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        >
          <option value="">All</option>
          <option value="women's clothing">women's clothing</option>
          <option value="men's clothing">men's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
        </select>

        <input
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter Price"
          className="w-full md:w-64 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        />
      </div>


      <h1 className='my-2 font-mono text-2xl'>Products Are Available : <b className='underline'>{filterProducts.length}</b> </h1>

      {filterProducts.length === 0 ? (
        <div className="products_not_found">
          <img src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150696458.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724716800&semt=ais_hybrid" alt="" />
        </div>
      ) : ""}

      <Carts products={filterProducts} />
    </>
  )
}

export default App
