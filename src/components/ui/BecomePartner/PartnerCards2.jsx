import React from 'react'

const PartnerCards2 = () => {
    const data = [
        { img: 'https://partner.microsoft.com/-/media/mssc/mpn/partner/feed-unit_blade-11_a_64x64.png', title: 'Choose Your Partnership Model', text: 'Select the partnership opportunity that aligns with your business objectives.' },
        { img: 'https://partner.microsoft.com/-/media/mssc/mpn/partner/feed-unit_blade-11_b_64x64.png', title: 'Get Started', text: "Gain access to resources, including training, marketing materials, and support." },
        { img: 'https://partner.microsoft.com/-/media/mssc/mpn/partner/feed-unit_blade-11_c_64x64.png', title: 'Grow with OSquare', text: "Be part of a growing community, leveraging OSquare's tools to achieve success." },
    ]
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10">
                {data.map((item, index) => (
                    <div key={index} className="card text-center justify-items-center">
                        <img src={item.img} alt={index + 1} />
                        <h2 className="text-xl font-bold text-[#273066] mb-2 whitespace-nowrap">{item.title}</h2>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default PartnerCards2