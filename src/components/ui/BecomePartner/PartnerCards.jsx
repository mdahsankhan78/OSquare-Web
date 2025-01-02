import React from 'react'

const PartnerCards = () => {
    const data = [
        { title: 'Technology Providers:', text: 'Expand your product offerings and deliver value to your clients.' },
        { title: 'Consultants & Service Providers:', text: "Help clients optimize workflows with OSquare's tools." },
        { title: 'Value-Added Resellers (VARs):', text: 'Offer OSquare products with competitive margins and support.' },
        { title: 'Affiliate Marketers:', text: 'Promote OSquare and earn commissions on every sale.' },
    ]
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {data.map((item, index) => (
                    <div className="col-span-1 card border hover:shadow-lg transition-all duration-300 rounded-t-xl" data-aos='fade-up' key={index}>
                        <div className="bg-blue-900 min-h-20 p-4 text-white rounded-t-xl text-center">
                            {item.title}
                        </div>
                        <div className="p-6">
                            {item.text}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default PartnerCards