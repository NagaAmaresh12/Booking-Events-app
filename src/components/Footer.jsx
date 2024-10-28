import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [footerData, setFooterData] = useState([]);

    useEffect(() => {
        // This simulates fetching or setting up data
        const data = [
            {   
                id: '1',
                title: 'COMPANY',
                data: ['About Us', 'Support Us', 'Privacy Policy', 'Terms & Conditions', 'Pricing & Refund']
            },
            {
                id: '2',
                title: 'COMMUNITY',
                data: ['Inertia', 'Discord']
            },
            {
                id: '3',
                title: 'Get In Touch',
                data: ['+91 1234567890', 'hello@welcome.com']
            },
        ];
        
        setFooterData(data);
    }, []); // Empty dependency array ensures this runs only once on mount
    
    return (
        <footer className="h-[60vh] w-full p-[3vw] bg-zinc-900">
            <section className="h-[92%] w-full flex items-center gap-6 justify-between border-zinc-400 py-4 border-y-[1px]">
                <aside className="h-full w-[22%]"></aside>
                {footerData.map(({ id, title, data }) => (
                    <aside key={id} className="h-full w-[22%] p-10 text-white">
                        <h4 className="py-4">{title}</h4>
                        <ul>
                            {data.map((item) => (
                                <li key={item} className="py-2 text-zinc-300">{item}</li>
                            ))}
                        </ul>
                    </aside>
                ))}
            </section>
            <section className="h-[18%] w-full flex items-center justify-center">
                <h4 className="text-center text-white">&copy; 2023 Welcome. All rights reserved.</h4>
            </section>
        </footer>
    );
};

export default Footer;
