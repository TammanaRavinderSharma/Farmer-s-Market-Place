import React, { useState } from "react";
import { useWishlist } from "../components/Wishlist";
import { useWishlist } from "../context/Wishlist";
const MilkProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const milkProducts = [
    {
      id: 1,
      name: "Whole Milk",
      price: "₹60",
      priceUnit: "1 liter",
      discount: null,
      image: "https://c.ndtvimg.com/2023-06/ev07v3c8_milk_625x300_27_June_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886"
    },
    {
      id: 2,
      name: "Cow Milk",
      price: "₹100",
      priceUnit: "1 liter",
      discount: "10% Off",
      image: "https://www.smc-madhusudan.co.in/cdn/shop/files/CowMilk500ml_683eaca2-7ed0-4f52-8ec5-982fce19c517.jpg?v=1714576649&width=3000"
    },
    {
      id: 3,
      name: "Almond Milk (Premium)",
      price: "₹150",
      priceUnit: "1 liter",
      discount: "43% Off",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFzxXEDIVvfhTXHUnAM0ZFdTlhc_okZV-CzQ&s"
    },
    {
      id: 4,
      name: "Buffalo Milk",
      price: "₹80",
      priceUnit: "1 liter",
      discount: "5% Off",
      image: "https://terrarosadairy.com/wp-content/uploads/2024/04/Untitled-design-24.webp"
    },
    {
      id: 5,
      name: "Coconut Milk",
      price: "₹100",
      priceUnit: "1 liter",
      discount: null,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUBj1GF90ExAzEcwOcKNF-DWpPEF5k_cxiAw&s"
    },
    {
      id: 6,
      name: "Soy Milk",
      price: "₹70",
      priceUnit: "1 liter",
      discount: null,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5QSKldTfV56H0ugg9yz31--8tpVQTWiuDMQ&s"
    },
    {
      id: 7,
      name: "Goat Milk",
      price: "₹200",
      priceUnit: "1 liter",
      discount: null,
      image: "https://images.onlymyhealth.com/imported/images/2024/June/13_Jun_2024/Main-goat-milk.jpg"
    },
    {
      id: 8,
      name: "Rice Milk",
      price: "₹70",
      priceUnit: "1 liter",
      discount: "5% Off",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Rice_milk.jpg"
    },
    {
      id: 9,
      name: "Oat Milk",
      price: "₹120",
      priceUnit: "1 liter",
      discount: "26% Off",
      image: "https://tribest.com/cdn/shop/articles/oat-milk.jpg?v=1629416735"
    },
    {
      id: 10,
      name: "Flavored Milk - Chocolate",
      price: "₹180",
      priceUnit: "1 liter",
      discount: "10% Off",
      image: "https://4.imimg.com/data4/KV/YO/MY-18752345/chocolate-flavored-milk-250x250.jpeg"
    },
    {
      id: 11,
      name: "Flavored Milk - Strawberry",
      price: "₹180",
      priceUnit: "1 liter",
      discount: "10% Off",
      image: "https://milkandpop.com/wp-content/uploads/2020/10/korean-strawberry-milk-15.jpg"
    },
    {
      id: 12,
      name: "A2 Desi Cow Milk",
      price: "₹120",
      priceUnit: "1 liter",
      discount: "20% Off",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ547heQkYRMFW9Ca9bGb51nqJzQmb1RQ5msA&s"
    
    },
      {

      id: 13,
      name: "Peanut Milk",
      price: "₹95",
      priceUnit: "1 liter",
      discount: "10% Off",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7yTAeL_RAw5m1ToUIAjTpZDvTcCBxZEWxZw&s"
    },
    
  
    {
        id: 14,
        name: "Greek Yogurt",
        price: "₹65",
        priceUnit: "500 gms",
        discount: null,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCzIjtq_tH-8oaT1bsvChvXoRHS0YEbRPrmQ&s"
    },
    {
        id: 15,
        name: "Cheese - Cottage",
        price: "₹150",
        priceUnit: "250 gms",
        discount: null,
        image: "https://www.potsandpans.in/cdn/shop/articles/Homemade_Cottage_Cheese_07.png?v=1656401062"
    },
    {
        id: 16,
        name: "Cheese - Mozzarella",
        price: "₹50",
        priceUnit: "200 gms",
        discount: null,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-zGX_k_WVybeYieYF_xDuDjvk_ihkx72bJA&s"
    },
    {
        id: 17,
        name: "Cheese - Parmesan",
        price: "₹100",
        priceUnit: "150 gms",
        discount: null,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDqdkuLyif0A_sj5-FTv-ot9AE61cr5ceQqw&s"
    },
    {
        id: 18,
        name: "Milk Powder",
        price: "₹45",
        priceUnit: "500 gms",
        discount: null,
        image: "https://static.toiimg.com/photo/61673689.cms"
    },
    {
        id: 19,
        name: "Condensed Milk",
        price: "₹80",
        priceUnit: "1 tin",
        discount: null,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfNIHzDJiRUVT2UvXwqE--lfygOyquw0vAqA&s"
    },
    {
        id: 20,
        name: "Cream",
        price: "₹100",
        priceUnit: "500 ml",
        discount: "5% Off",
        image: "https://www.recipetineats.com/tachyon/2022/11/Chantilly-cream_5.jpg?resize=500%2C500"
    },
    {
        id: 21,
        name: "Butter",
        price: "₹40",
        priceUnit: "500 gms",
        discount: "15% Off",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGKR_Ed7_2eJggsOMoOduflikhz6_Nf4GKsg&s"
    },
    {
        id: 22,
        name: "Whipped Cream",
        price: "₹170",
        priceUnit: "1 can",
        discount: "10% Off",
        image: "https://joyfoodsunshine.com/wp-content/uploads/2019/12/best-homemade-whipped-cream-recipe-square-500x375.jpg"
    },
    {
        id: 23,
        name: "Ice Cream - Vanilla",
        price: "₹30",
        priceUnit: "500 ml",
        discount: "10% Off",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzV2Fy-LA1rmf7uCnS2vbllUMty5AtnxfCbw&s"
    },
    {
        id: 24,
        name: "Ice Cream - Chocolate",
        price: "₹160",
        priceUnit: "500 ml",
        discount: null,
        image: "https://carveyourcraving.com/wp-content/uploads/2021/06/chocolate-icecream-in-an-icecream-maker.jpg"
    },
    {
        id: 25,
        name: "Milkshake - Mango",
        price: "₹60",
        priceUnit: "500 ml",
        discount: null,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRU-GCECfpq1lYXDhMPaOBYw7kfGu2FY6Wg&s"
    },
    {
        id: 26,
        name: "Milkshake - Strawberry",
        price: "₹75",
        priceUnit: "500 ml",
        discount: null,
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/strawberry-milkshake-recipe.jpg"
    },
    {
        id: 27,
        name: "Flavored Milk - Strawberry",
        price: "₹100",
        priceUnit: "1 liter",
        discount: null,
        image: "https://kidseatincolor.com/wp-content/uploads/2022/06/Flavored-Milks.jpg"
    },
    {
        id: 28,
        name: "Flavored Milk - Mango",
        price: "₹60",
        priceUnit: "1 liter",
        discount: "10% Off",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGcAMBm90Xw10DZTrKlPYMsLmfDGTnQm_0Yw&s"
    },
    {
        id: 29,
        name: "Kesar Milk",
        price: "₹80",
        priceUnit: "1 liter",
        discount: "10% Off",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK5AwgvuTyOHpdc6NM1SEHWStXwzgRs61z-A&s"
    },
    {
        id: 30,
        name: "Ghee",
        price: "₹50",
        priceUnit: "500 ml",
        discount: "10% Off",
        image: "https://yogamanlab.com/cdn/shop/files/Ghee.jpg?v=1724158488"
    }
  ];

  const filteredMilkProducts = milkProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert(`${product.name} added to cart!`);
  };

  const handleAddToWishlist = (product) => {
    setWishlist((prev) => [...prev, product]);
    alert(`${product.name} added to wishlist!`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="bg-green-500 text-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MilkMart</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search for milk products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 rounded-md outline-none text-black"
            />
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="flex flex-col md:flex-row p-4 container mx-auto flex-grow">
        {/* Sidebar Filter */}
        <div className="w-full md:w-1/4 bg-gray-800 text-white p-4 rounded-md">
          <h2 className="font-semibold text-lg mb-4">Filter</h2>
          <ul className="space-y-2">
            {["Milk Products", "Dairy", "Beverages", "Ghee", "More"].map(
              (item) => (
                <li key={item} className="cursor-pointer hover:text-green-400">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4 p-4">
          {/* Featured Banner */}
          <div className="mb-4">
            <div
              className="rounded-md p-6 text-center relative text-white"
              style={{
                backgroundImage:
                  'url("https://img.freepik.com/premium-photo/fresh-figs-with-leaves-black-wooden-table-free-space-text-top-view_187166-40558.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className="text-2xl font-bold">
                Premium Milk Products at your doorsteps.
              </h2>
              <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200">
                Order Now
              </button>
            </div>
          </div>

          {/* Milk Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredMilkProducts.length > 0 ? (
              filteredMilkProducts.map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-700 rounded-md shadow-sm p-4 hover:shadow-md relative bg-gray-800"
                >
                  {product.discount && (
                    <div className="absolute top-2 left-2 bg-green-500 text-white text-xs py-1 px-2 rounded-md">
                      {product.discount}
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-sm text-gray-400">
                    {product.price} ({product.priceUnit})
                  </p>
                  <div className="flex space-x-2 mt-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                      <span className="material-icons">shopping_cart</span>
                    </button>
                    <button
                             onClick={() => addToWishlist(product)}
                           className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg"
                         >
                  Add to Wishlist
                 </button>

                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center text-white">
                No products found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilkProductsPage;
