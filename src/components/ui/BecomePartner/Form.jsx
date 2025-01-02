import React, { useState } from 'react'
import Spinner from '../Spinner';

const Form = () => {
    const [msg, setMsg] = useState(null);
    const [loading, setloading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setloading(true);
        setTimeout(() => {
            setloading(false);
            setMsg('Thank you for your message! We will get back to you soon.');
        }, 3000);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-2">I am signing up as:</label>
                    <div className="flex flex-wrap items-center gap-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="signup_type"
                                value="individual"
                                className="mr-2 focus:ring-[#273066]"
                                defaultChecked
                            />
                            Value-Added Resellers (VARs)
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="signup_type"
                                value="organization"
                                className="mr-2 focus:ring-[#273066]"
                            />
                            Technology Providers
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="signup_type"
                                value="organization"
                                className="mr-2 focus:ring-[#273066]"
                            />
                            Consultants & Service Providers
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="signup_type"
                                value="organization"
                                className="mr-2 focus:ring-[#273066]"
                            />
                            Affiliate Marketers
                        </label>
                    </div>
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                        required
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273066]"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                        required
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273066]"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Whatsapp Number</label>
                    <input
                        type="tel"
                        placeholder="Your Whatsapp number"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" // Example pattern for US phone number (XXX-XXX-XXXX)
                        title="Please enter a whatsapp number in the format XXX-XXX-XXXX"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273066]"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea
                        required
                        placeholder="Your Message"
                        rows="4"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273066]"
                    ></textarea>
                </div>
                {msg && <p className="text-green-600">{msg}</p>}
                <button
                    type="submit"
                    className="w-full bg-[#273066] text-white py-2 rounded-lg font-semibold hover:bg-[#273066]/95 transition"
                >
                    {loading ? <Spinner /> : 'Submit an Application'}
                </button>
            </form>
        </>
    )
}

export default Form