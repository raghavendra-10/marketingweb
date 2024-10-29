import React from 'react';
import Image from 'next/image';
import linkedin from '../images/linkedin.png'; // Replace with actual path
import instagram from '../images/insta.webp'; // Replace with actual path
import paypal from '../images/paypal.png'; // Replace with actual path
import upi from '../images/upi.png'; // Replace with actual path
import visa from '../images/visa.png'; // Replace with actual path
import discover from '../images/discover.png'; // Replace with actual path
import afterpay from '../images/afterpay.png'; // Replace with actual path
import mastercard from '../images/matercard.png'; // Replace with actual path

function Footer() {
    return (
        <div className="bg-white py-10 px-6 md:px-20 text-center md:text-left">
            {/* Newsletter Subscription Section */}
            <div className="mb-8 flex flex-col items-center justify-center">
                <h2 className="text-2xl font-semibold">Subscribe to our Newsletter</h2>
                <p className="text-gray-600">to stay up to date on all the latest updates</p>
                <div className="flex  mt-4">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="border p-2 rounded-full text-sm w-64"
                    />
                    <button className="bg-indigo-600 text-white px-4 rounded-full">Subscribe</button>
                </div>
            </div>

            {/* Footer Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3  gap-8 mt-10 text-sm">
                {/* Contact Info */}
                <div>
                    <h3 className="font-semibold mb-2">contact us</h3>
                    <p>E: careAutomate@gmail.com</p>
                    <p>P: +1 9893843934</p>
                </div>

                {/* Address */}
                <div>
                    <h3 className="font-semibold mb-2">Administrative address</h3>
                    <p>Unit 1/8 – opp</p>
                    <p>Hitech City, Hyderabad</p>
                </div>

                {/* Office Timings */}
                <div>
                    <h3 className="font-semibold mb-2">Administrative office opening timings</h3>
                    <p>Monday to Sunday</p>
                    <p>10am to 4pm</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4  mt-10 text-sm'>
                {/* Product Categories */}
                <div>
                    <h3 className="font-semibold mb-2">Product Categories</h3>
                    <p>Veg items</p>
                    <p>Non-Veg items</p>
                    <p>Shakes</p>
                    <p>Deserts</p>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="font-semibold mb-2">Resources</h3>
                    <p>Veg items</p>
                    <p>Non-Veg items</p>
                    <p>Shakes</p>
                    <p>Deserts</p>
                </div>

                {/* Social Media Links */}

                <div>
                    <h3 className="font-semibold mb-2">Follow us on</h3>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <Image src={linkedin} alt="LinkedIn" width={24} height={24} />
                        <Image src={instagram} alt="Instagram" width={24} height={24} />
                    </div>
                </div>

                {/* Accepted Payments */}
                <div>
                    <div>
                        <h3 className="font-semibold mb-2">Accepted Payments</h3>
                        <div className='gap-10 flex flex-col'>
                            <div className='flex gap-10'>
                                <Image src={mastercard} alt="PayPal" width={80}  />
                                <Image src={upi} alt="UPI" width={80}  />
                                <Image src={discover} alt="Discover" width={80}  />
                            </div>
                            <div className='flex gap-10'>
                                <Image src={paypal} alt="PayPal" width={80}  />
                                <Image src={visa} alt="Visa" width={80}  />

                                <Image src={afterpay} alt="Afterpay" width={80}  />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
