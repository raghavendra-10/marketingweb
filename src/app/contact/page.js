import React from 'react';
import Footer from '../components/footer';

function ContactForm() {
    return (
        <div className="flex flex-col items-center p-6 md:p-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">Contact Us</h2>
            <p className="text-center text-gray-600 mb-6">
                Have questions or need assistance? We're here to help! Reach out to us and let's connect
            </p>
            <form className="w-full max-w-lg flex flex-col gap-4">
                <div className='flex flex-col md:flex-row gap-4'>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="p-3 border border-[#6F84F8] rounded-md w-full text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="p-3 border border-[#6F84F8] rounded-md w-full text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className='flex flex-col md:flex-row gap-4'>
                    <input
                        type="tel"
                        placeholder="Mobile No"
                        className="p-3 border border-[#6F84F8] rounded-md w-full text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <select
                        className="p-3 border border-[#6F84F8] rounded-md w-full text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="">Your Query Type</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Support</option>
                        <option value="feedback">Feedback</option>
                    </select>
                </div>
                <textarea
                    placeholder="Your Message"
                    className="p-3 border border-[#6F84F8] rounded-md w-full text-base h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                    type="submit"
                    className="p-3 w-1/2 rounded-full self-center bg-[#6F84F8] text-white font-medium hover:bg-indigo-700 transition-all duration-300"
                >
                    Send Your Message
                </button>
            </form>
        </div>
    );
}

function Page() {
    return (
        <div>
            <ContactForm />
            <Footer />
        </div>
    );
}

export default Page;
