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
            setMsg('Thank you for helping us improve OSquare. Your feedback is invaluable in shaping the future of our products!');
        }, 3000);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-4 pt-8">
                <p className='text-gray-700'>Please fill out the form below to submit a ticket. Our support team will review your submission and get back to you as soon as possible.</p>
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
                    <label className="block text-gray-700 font-medium mb-2">Feedback</label>
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
                    {loading ? <Spinner /> : 'Submit Ticket'}
                </button>
            </form>
        </>
    )
}

export default Form