function Carts({ products }) {

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {products.map((product) => (
                       <div key={product.id} className="max-w-sm my-2 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                       <img 
                         src={product.image} 
                         alt="Product Image" 
                         className="w-full h-48 object-cover"
                       />
                       
                       <div className="p-4">
                         <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
                         <p className="text-sm text-gray-600 mt-2">
                           {product.description}
                         </p>
                         
                         <div className="flex justify-between items-center mt-4">
                           <span className="text-xl font-bold text-orange-500">${product.price}</span>
                           <span className="text-sm text-gray-600">Category: {product.category}</span>
                         </div>
                         
                         <div className="flex items-center mt-4">
                           <span className="text-yellow-500 mr-1">&#9733;</span>
                           <span className="text-yellow-500 mr-1">&#9733;</span>
                           <span className="text-yellow-500 mr-1">&#9733;</span>
                           <span className="text-yellow-500 mr-1">&#9733;</span>
                           <span className="text-yellow-500 mr-1">&#9734;</span>
                           <span className="text-gray-600 text-sm">({product.rating.rate})</span>
                         </div>
                       </div>
                     </div>
                     

                    ))}
                </div>
            </div>
        </section>

    )
}

export default Carts