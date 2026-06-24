import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineFilter } from 'react-icons/ai';

const Products = () => {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);

const [filters, setFilters] = useState({
category: '',
minPrice: '',
maxPrice: '',
sort: 'newest'
});

const [showFilters, setShowFilters] = useState(false);

useEffect(() => {
const fetchProducts = async () => {
try {
setLoading(true);

    const response = await axios.get(
      'http://localhost:5000/api/products',
      {
        params: filters
      }
    );

    setProducts(response.data.data);
  } catch (error) {
    console.error('Error fetching products:', error);
  } finally {
    setLoading(false);
  }
};

fetchProducts();

}, [filters]);

return (
<div className="min-h-screen bg-yellow-50">
<div className="max-w-7xl mx-auto px-4 py-8">

    {/* Header */}
    <div className="mb-8">
      <h1 className="text-4xl font-bold mb-2">
        PRINTiZY Products
      </h1>

      <p className="text-gray-600">
        Browse our premium collection of Custom T-Shirts, Hoodies, Mugs, Caps & Personalized Gifts
      </p>
    </div>

    {/* Mobile Filter Button */}
    <div className="lg:hidden mb-4">
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-lg"
      >
        <AiOutlineFilter />
        Filters
      </button>
    </div>

    <div className="flex gap-8">

      {/* Sidebar Filters */}
      <div
        className={`${
          showFilters ? 'block' : 'hidden'
        } lg:block w-full lg:w-64`}
      >
        <div className="bg-white p-6 rounded-lg shadow border border-yellow-200">

          <h3 className="font-bold text-lg mb-4">
            Filters
          </h3>

          {/* Category */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3">
              Product Category
            </h4>

            <select
              value={filters.category}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  category: e.target.value
                })
              }
              className="w-full px-3 py-2 border border-yellow-300 rounded"
            >
              <option value="">All Products</option>
              <option value="tshirts">Custom T-Shirts</option>
              <option value="hoodies">Printed Hoodies</option>
              <option value="mugs">Custom Mugs</option>
              <option value="caps">Printed Caps</option>
              <option value="gifts">Personalized Gifts</option>
            </select>
          </div>

          {/* Price */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3">
              Price Range
            </h4>

            <div className="space-y-2">
              <input
                type="number"
                placeholder="Min Price"
                value={filters.minPrice}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    minPrice: e.target.value
                  })
                }
                className="w-full px-3 py-2 border border-yellow-300 rounded"
              />

              <input
                type="number"
                placeholder="Max Price"
                value={filters.maxPrice}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    maxPrice: e.target.value
                  })
                }
                className="w-full px-3 py-2 border border-yellow-300 rounded"
              />
            </div>
          </div>

          {/* Sort */}
          <div>
            <h4 className="font-semibold mb-3">
              Sort By
            </h4>

            <select
              value={filters.sort}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  sort: e.target.value
                })
              }
              className="w-full px-3 py-2 border border-yellow-300 rounded"
            >
              <option value="newest">
                Newest Designs
              </option>

              <option value="price_asc">
                Price: Low to High
              </option>

              <option value="price_desc">
                Price: High to Low
              </option>

              <option value="rating">
                Best Selling
              </option>
            </select>
          </div>

        </div>
      </div>

      {/* Products Grid */}
      <div className="flex-1">

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {products.length > 0 ? (
              products.map((product) => (
                <Link
                  key={product._id}
                  to={`/product/${product._id}`}
                  className="bg-white rounded-lg shadow hover:shadow-xl hover:-translate-y-1 transition overflow-hidden border border-yellow-100"
                >

                  <div className="bg-yellow-50 h-48 flex items-center justify-center text-6xl">
                    👕
                  </div>

                  <div className="p-4">

                    <h3 className="font-bold text-sm mb-2 line-clamp-2">
                      {product.name}
                    </h3>

                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between">

                      <div>
                        <span className="text-yellow-600 font-bold text-lg">
                          ₹{product.price}
                        </span>

                        {product.discount > 0 && (
                          <span className="ml-2 text-xs bg-red-500 text-white px-2 py-1 rounded">
                            {product.discount}% OFF
                          </span>
                        )}
                      </div>

                      <span className="text-yellow-600 font-semibold">
                        ⭐ {product.rating?.toFixed(1) || 0}
                      </span>

                    </div>

                  </div>

                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">
                  No PRINTiZY products available right now.
                </p>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  </div>
</div>

);
};

export default Products;
