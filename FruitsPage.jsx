import React, { useState } from "react";

const FruitsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const fruits = [
    {
        id: 1,
        name: "Amla / Indian Gooseberry",
        price: "₹60",
        priceUnit: "1 kg",
        discount: null,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7H0anHeGzABon3K5FYMSSjEllMxlWhPatUw&s"
    },
    {
        id: 2,
        name: "Apples",
        price: "₹100",
        priceUnit: "1 kg",
        discount: "10% Off",
        image: "https://images.everydayhealth.com/images/diet-nutrition/apples-101-about-1440x810.jpg"
    },
    {
        id: 3,
        name: "Avocado Imported (Premium) (approx.170g to 220g)",
        price: "₹150",
        priceUnit: "1 Nos",
        discount: "43% Off",
        image: "https://images.healthshots.com/healthshots/en/uploads/2024/04/04153309/avocado-1.jpg"
    },
    {
        id: 4,
        name: "Bananas",
        price: "₹80",
        priceUnit: "1 dozen",
        discount: "5% Off",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxT3DfzV4rz5N3UOf-flQmTV1u3N9PJk4gOg&s"
    },
    {
        id: 5,
        name: "Blueberries",
        price: "₹100",
        priceUnit: "1 box",
        discount: null,
        image: "https://cdn.bestbrains.com/blog/national-blueberry-month/blueberries.jpg"
    },
    {
        id: 6,
        name: "Chiku",
        price: "₹70",
        priceUnit: "500 gms",
        discount: null,
        image: "https://i.ndtvimg.com/i/2016-06/sapota_625x350_71466155410.jpg?downsize=545:307"
    },
    {
        id: 7,
        name: "Dates",
        price: "₹200",
        priceUnit: "1 box",
        discount: null,
        image: "https://images.onlymyhealth.com/imported/images/2023/November/24_Nov_2023/Main-dateseedshealthbenefits.jpg"
    },
    {
        id: 8,
        name: "Dragon Fruit",
        price: "₹70",
        priceUnit: "1 nos, approx.250 gms",
        discount: "5% Off",
        image: "https://media.post.rvohealth.io/wp-content/uploads/2024/01/A-pink-pitahaya-cut-it-in-half-Dragon-Fruit-thumbnail.jpg"
    },
    {
        id: 9,
        name: "Fresh Fig - 6 pcs",
        price: "₹120",
        priceUnit: "1 Nos",
        discount: "26% Off",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKMr_upFiKhbevx03Q_W0T3TnqNYoHl4S2vQ&s"
    },
    {
        id: 10,
        name: "Green Apples",
        price: "₹180",
        priceUnit: "500 to 650 gms",
        discount: "10% Off",
        image: "https://cdn.mos.cms.futurecdn.net/uW9uHvW5LUYBaoZuSyEsXP.jpg"
    },
    {
        id: 11,
        name: "Grapes-Black",
        price: "₹70",
        priceUnit: "250 gms",
        discount: null,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAue1qW16o7ojB1PFL0IiQ7B9NbYwZta81Pw&s"
    },
    {
        id: 12,
        name: "Grapes-Green",
        price: "₹60",
        priceUnit: "500 gms",
        discount: null,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmaJNzuh28-gmCQ7GdXz9WULsN2IzbI4QVQQ&s"
    },
    {
        id: 13,
        name: "Guava",
        price: "₹70",
        priceUnit: "1 kg",
        discount: "10% Off",
        image: "https://media.post.rvohealth.io/wp-content/uploads/2020/09/benefits-of-guavas-732x549-thumbnail-732x549.jpg"
    },
    {
        id: 14,
        name: "Jamun",
        price: "₹65",
        priceUnit: "1 kg",
        discount: null,
        image: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/06/15/Pictures/_3262234e-8f34-11e9-bf7d-e03ff1c1f16f.jpg"
    },
    {
        id: 15,
        name: "Kiwi",
        price: "₹150",
        priceUnit: "1 box",
        discount: null,
        image: "https://vegetablewale.in/wp-content/uploads/2024/07/kiwi4.jpg"
    },
    {
        id: 16,
        name: "Limes",
        price: "₹50",
        priceUnit: "5 nos",
        discount: null,
        image: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/lime-vs-lemon-1296x728-feature.jpg?w=1155&h=1528"
    },
    {
        id: 17,
        name: "Mosambi / Sweet Lime",
        price: "₹100",
        priceUnit: "1 kg",
        discount: null,
        image: "https://cdn.justgotochef.com/uploads/1562656455-Sweet%20Limes-landing%20GTC.png?w=633&h=381&fit=crop"
    },
    {
        id: 18,
        name: "Muskmelon",
        price: "₹45",
        priceUnit: "1 nos",
        discount: null,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsHMh6VwRJ2Rgv_IXd1gYOJeWHLqnr48WscQ&s"
    },
    {
        id: 19,
        name: "Orange Kinnow",
        price: "₹80",
        priceUnit: "1 kg",
        discount: null,
        image: "https://www.orgpick.com/cdn/shop/files/OrganickinnowOrange.png?v=1734339665"
    },
    {
        id: 20,
        name: "Oranges",
        price: "₹100",
        priceUnit: "1 kg",
        discount: "5% Off",
        image: "https://i0.wp.com/thefoodiesavenue.com/wp-content/uploads/2023/07/Oranges-mix6-1.png?resize=1024%2C701&ssl=1"
    },
    {
        id: 21,
        name: "Papaya",
        price: "₹40",
        priceUnit: "1 nos",
        discount: "15% Off",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB6a4h4DJkWudddqEgmMHVnRsBIqI3HMatvg&s"
    },
    {
        id: 22,
        name: "Pear",
        price: "₹170",
        priceUnit: "4 nos",
        discount: "10% Off",
        image: "https://images.healthshots.com/healthshots/en/uploads/2024/08/23190908/Pear.jpg"
    },
    {
        id: 23,
        name: "Pineapple",
        price: "₹30",
        priceUnit: "1 nos",
        discount: "10% Off",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdncgwoQjq5BQjpf9jk2pWJXqt62h0q6fFxA&s"
    },
    {
        id: 24,
        name: "Plums / Aloo Bukhara",
        price: "₹160",
        priceUnit: "250 gms",
        discount: null,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaaN8sp0hX6gsOUEE-U6mHj0wf_UE40jYEpw&s"
    },
    {
        id: 25,
        name: "Pomegranate",
        price: "₹60",
        priceUnit: "1 kg",
        discount: null,
        image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-seed/o/1/x/25-vlr-138-pomegranate-tree-seed-punica-granatum-25-seeds-vibex-original-imagggaf2dazyshm.jpeg?q=90&crop=false"
    },
    {
        id: 26,
        name: "Shahtoot / Mulberries",
        price: "₹75",
        priceUnit: "1 kg",
        discount: null,
        image: "https://cdn.britannica.com/16/9916-050-A26D40F5/Fruit-red-mulberry.jpg"
    },
    {
        id: 27,
        name: "Strawberries",
        price: "₹100",
        priceUnit: "1 box",
        discount: null,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTdrJsCJAQbJNJHoaxFJqyJoKCQl2gQVGqCw&s"
    },
    {
        id: 28,
        name: "Sun Melon",
        price: "₹60",
        priceUnit: "200 to 1000 gms",
        discount: "10% Off",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEdRY-MyIHn3wESUzKsv16TMG6EOUwwsNiNw&s"
    },
    {
        id: 29,
        name: "Sweet Tamarind",
        price: "₹80",
        priceUnit: "200 gms",
        discount: "10% Off",
        image: "https://www.allrecipes.com/thmb/0b6D_ZfdVD07bPrM3_0LQmml74Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1147545054-2000-cf62d6b8188846518193157fba8449be.jpg"
    },
    {
        id: 30,
        name: "Watermelon",
        price: "₹50",
        priceUnit: "1 nos",
        discount: "10% Off",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4rjFJe58Pu1S9cvDOE_X_qPaMTyUAO8qS8w&s"
    }
];


  const filteredFruits = fruits.filter((fruit) =>
    fruit.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Navbar
      <nav className="bg-green-500 text-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">FruitMart</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search for fruits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 rounded-md outline-none text-black"
            />
          </div>
        </div>
      </nav> */}

      {/* Content */}
      <div className="flex flex-col md:flex-row p-4 container mx-auto flex-grow">
        {/* Sidebar Filter */}
        <div className="w-full md:w-1/4 bg-gray-800 text-white p-4 rounded-md">
          <h2 className="font-semibold text-lg mb-4">Filter</h2>
          <ul className="space-y-2">
            {[
              "Fruits",
              "Vegetables",
              "Dairy Farm",
              "Ghee",
              "Village Staples",
              "Winter Special",
              "Dry Fruits",
              "Cold Pressed Oils",
              "More",
            ].map((item) => (
              <li key={item} className="cursor-pointer hover:text-green-400">
                {item}
              </li>
            ))}
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
              <h2 className="text-2xl font-bold">Fresh Figs are now just a click away.</h2>
              <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200">
                Order Now
              </button>
            </div>
          </div>

          {/* Fruits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredFruits.length > 0 ? (
              filteredFruits.map((fruit) => (
                <div
                  key={fruit.id}
                  className="border border-gray-700 rounded-md shadow-sm p-4 hover:shadow-md relative bg-gray-800"
                >
                  {fruit.discount && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full absolute top-2 left-2">
                      {fruit.discount}
                    </span>
                  )}
                  <img
                    src={fruit.image}
                    alt={fruit.name}
                    className="w-full h-32 object-cover rounded-md"
                  />
                  <h3 className="font-semibold text-lg mt-2">{fruit.name}</h3>
                  <p className="text-sm text-gray-400 mt-1">{fruit.priceUnit}</p>
                  <p className="text-lg font-bold text-green-400 mt-1">{fruit.price}</p>
                  <button className="mt-4 px-4 py-2 bg-green-500 text-black rounded-md hover:bg-green-600">
                    Add to Cart
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No fruits found matching your search.</p>
            )}
          </div>
        </div>
      </div>

      {/* Footer
      <footer className="bg-green-500 text-black py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.facebook.com" className="hover:text-gray-800">
                Facebook
              </a>
              <a href="https://twitter.com" className="hover:text-gray-800">
                Twitter
              </a>
              <a href="https://www.instagram.com" className="hover:text-gray-800">
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p className="mt-2">Email: support@fruitmart.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default FruitsPage;