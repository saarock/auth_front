import React from 'react';
import "./footer.css"

const Footer = () => {
  return (
    <>
        <footer className="primary-div text-white py-10">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
                <div>
                    <h2 className="text-3xl font-bold text-customGreen mb-4">Restaurant Name</h2>
                    <p className="text-gray-300">
                        Experience the finest dining with the best flavors from around the world.
                        Where every meal is a memory.
                    </p>
                </div>
          
                <div>
                    <h3 className="text-xl font-semibold text-customGreen mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#menu" className="hover:text-green-600">Menu</a></li>
                        <li><a href="#about" className="hover:text-green-600">About Us</a></li>
                        <li><a href="#reservations" className="hover:text-green-600">Reservations</a></li>
                        <li><a href="#contact" className="hover:text-green-600">Contact Us</a></li>
                    </ul>
                </div>
      
                <div>
                    <h3 className="text-xl font-semibold text-customGreen mb-4">Contact Us</h3>
                    <p className="text-gray-300">
                        123 Food Street, Flavor Town<br />
                        +1 234 567 890<br />
                        info@restaurantname.com
                    </p>
                    <div className="flex space-x-4 mt-4">
      
                        <a href="#" className="hover:text-green-500"><i
                                className="fab fa-facebook fa-lg"></i></a>
                        <a href="#" className="hover:text-green-500"><i
                                className="fab fa-twitter fa-lg"></i></a>
                        <a href="#" className="hover:text-green-500"><i
                                className="fab fa-instagram fa-lg"></i></a>
                    </div>
                </div>
            </div>
        
            <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                <p className="text-gray-400 text-sm">© 2024 Restaurant Name. All rights reserved.</p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer