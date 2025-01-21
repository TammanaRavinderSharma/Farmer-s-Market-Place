import React from "react";
import { IoSearch } from "react-icons/io5"; // Search icon
import { FaCartArrowDown } from "react-icons/fa"; // Cart icon
import Slider from "react-slick";
import { NavLink } from "react-router-dom"; // Import NavLink for navigation

const Landingpage = () => {
  const products = [
    { id: 1, name: "Fresh Mangoes", price: "₹80/kg", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr2fGuHb2HRTfoVawM5E5q_Mw6BgmhZa__Eg&s" },
    { id: 2, name: "Organic Spinach", price: "₹50/bundle", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkyt_vuaGTi82qopFHXcT1Afh4Dft662FGkw&s" },
    { id: 3, name: "Cow Milk", price: "₹60/L", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShu7nSW1WZKGdA6ubbPw3L1FAbbv8ZLE1WOQ&s" },
    { id: 4, name: "Juicy Watermelons", price: "₹40/unit", image: "https://img.freepik.com/premium-photo/fresh-juicy-watermelon-slices-perfect-summer-refreshments-healthy-fruit-platters_1287927-5195.jpg" },
    { id: 5, name: "Guava", price: "₹55 (500 g)", image: "https://media.post.rvohealth.io/wp-content/uploads/2020/09/benefits-of-guavas-732x549-thumbnail-732x549.jpg" },
    { id: 6, name: "Black Grapes", price: "₹59 (250 g)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4WYif2OdU39BhjGoBcmdZKWwu08jDJiatEA&s" },
    { id: 7, name: "Masoor Dal", price: "₹63 (500 g)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwuE25i_1uKWV9eSTSAFrjITgg9aEcs-AUJw&s" },
    { id: 8, name: "New Onion", price: "₹20 (500 g)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQV9TjBvzxOEM2EzGOahkb2gIH0wvyq1bMA&s" },
  ];

  const bannerImages = [
    "https://ik.imagekit.io/44y3v51cp/kisankonnect/Images/BannerImage/20241210112748Hurda%20Combo%20Story%20Web.jpg?tr=f-webp",
    "https://ik.imagekit.io/44y3v51cp/kisankonnect/Images/BannerImage/20241219162537Story%20Banner%20Web%20%201920px%20%20600px.png?tr=f-webp",
    "https://ik.imagekit.io/44y3v51cp/kisankonnect/Images/BannerImage/20240806183118Shrikhand%20web%20story.jpg?tr=f-webp",
  ];

  const categoryImages = [
    { name: "Fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw1G8RTrp5ZdlTaWCPHhkJzPxzzzJJnIHt-Q&s", path: "/fruits" },
    { name: "Vegetables", image: "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6", path: "/vegetables" },
    { name: "Grains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK18BMfed2b5kIHGTV_KPWsD3mGd2C05iBFQ&s", path: "/grains" },
    { name: "Milk Products", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjM0EiOlRNTCIomVZign46FOZw0zvshUx79A&s", path: "/milk-products" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Slider Section */}
      <section className="bg-black py-6">
        <div className="container mx-auto">
          <Slider {...sliderSettings}>
            {bannerImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Banner ${index + 1}`} className="w-full h-96 object-cover rounded-lg shadow-md" />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Shop by Categories Section */}
      <section className="bg-black py-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">Shop by Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categoryImages.map((category, index) => (
              <NavLink to={category.path} key={index} className="bg-black bg-opacity-50 rounded-lg shadow-md text-center p-4 transform transition-all hover:scale-105">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold text-white">{category.name}</h3>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold text-white">{product.name}</h3>
                <p className="text-green-100 font-bold">{product.price}</p>
                <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center">
                  <FaCartArrowDown className="mr-2" /> Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landingpage;
