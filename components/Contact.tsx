
import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        interest: 'Suite Booking',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        alert('Thank you for your inquiry. Our concierge team will contact you shortly.');
        setFormData({ name: '', email: '', interest: 'Suite Booking', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="pt-32 min-h-screen bg-[#F5F2EB]">
            {/* Hero Section */}
            <div className="text-center mb-16 px-6 animate-fade-in-up">
                <h1 className="text-5xl md:text-7xl font-serif font-medium text-[#2C2A26] mb-4">
                    Plan Your Arrival.
                </h1>
                <p className="text-lg text-[#5D5A53] font-light tracking-wide uppercase">
                    We are at your service 24/7.
                </p>
            </div>

            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 px-6 md:px-12 pb-24">

                {/* Left Column: Contact Info */}
                <div className="flex flex-col space-y-12 animate-fade-in-up animate-delay-200">

                    {/* Priority Action */}
                    <div>
                        <a
                            href="https://wa.me/254700000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full md:w-auto px-8 py-5 border-2 border-[#2C2A26] text-[#2C2A26] hover:bg-[#2C2A26] hover:text-[#F5F2EB] transition-colors duration-300 uppercase tracking-widest font-medium text-sm gap-3 group"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.68 2 12.04 2zM12.05 20.21c-1.5 0-2.98-.38-4.28-1.11l-.3-.18-2.61.69.83-2.52-.23-.37a8.12 8.12 0 0 1 12.63-8.8 8.13 8.13 0 0 1 2.05 12.28 8.15 8.15 0 0 1-8.09 3.03v-1.02zm4.32-3.8c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-1.16-1.03-1.94-2.3-2.17-2.69-.23-.39-.02-.6.1-.71.1-.11.23-.29.35-.43.11-.14.15-.24.23-.4.08-.16.03-.3-.02-.42-.05-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.4-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5 1.12 1.5 2.7 4.15 6.77 5.86 2.76 1.16 3.82.96 4.5.9 1-.09 1.42-.4 1.62-.79.2-.39.2-.73.14-.8z" />
                            </svg>
                            Chat with Concierge (Instant)
                        </a>
                    </div>

                    {/* Details List */}
                    <div className="space-y-6 text-[#5D5A53] font-light">
                        <div className="flex items-start gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 mt-1 flex-shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <div>
                                <h4 className="font-serif text-[#2C2A26] text-lg mb-1">Azure Horizon Suites</h4>
                                <p>4th Parklands Avenue,<br /> Nairobi, Kenya</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 mt-1 flex-shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <div>
                                <h4 className="font-serif text-[#2C2A26] text-lg mb-1">Email Reservations</h4>
                                <a href="mailto:reservations@azurehorizon.com" className="hover:text-[#2C2A26] transition-colors">reservations@azurehorizon.com</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 mt-1 flex-shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <div>
                                <h4 className="font-serif text-[#2C2A26] text-lg mb-1">Front Desk</h4>
                                <p>+254 20 123 4567</p>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="w-full aspect-video bg-[#EBE7DE] flex items-center justify-center grayscale contrast-[0.9]">
                        <span className="text-[#A8A29E] font-medium tracking-widest uppercase text-sm">Google Maps Embed</span>
                    </div>

                </div>

                {/* Right Column: Inquiry Form */}
                <div className="bg-white/50 backdrop-blur-sm p-8 md:p-12 animate-fade-in-up animate-delay-400 border border-[#D6D1C7]/30">
                    <h3 className="text-2xl font-serif text-[#2C2A26] mb-8">Send an Inquiry</h3>
                    <p className="text-[#5D5A53] font-light mb-10">
                        Whether you are booking a suite or planning an event, our team is ready to assist.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="group">
                                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-[#A8A29E] mb-2 group-focus-within:text-[#2C2A26] transition-colors">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-b border-[#D6D1C7] py-2 outline-none text-[#2C2A26] focus:border-[#2C2A26] transition-colors"
                                />
                            </div>
                            <div className="group">
                                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-[#A8A29E] mb-2 group-focus-within:text-[#2C2A26] transition-colors">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-b border-[#D6D1C7] py-2 outline-none text-[#2C2A26] focus:border-[#2C2A26] transition-colors"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label htmlFor="interest" className="block text-xs font-bold uppercase tracking-widest text-[#A8A29E] mb-2 group-focus-within:text-[#2C2A26] transition-colors">I am interested in</label>
                            <select
                                id="interest"
                                name="interest"
                                value={formData.interest}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-[#D6D1C7] py-2 outline-none text-[#2C2A26] focus:border-[#2C2A26] transition-colors appearance-none cursor-pointer"
                            >
                                <option value="Suite Booking">Suite Booking</option>
                                <option value="Event Inquiry">Event Inquiry</option>
                                <option value="Dining">Dining</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="group">
                            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-[#A8A29E] mb-2 group-focus-within:text-[#2C2A26] transition-colors">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-b border-[#D6D1C7] py-2 outline-none text-[#2C2A26] focus:border-[#2C2A26] transition-colors resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-[#2C2A26] text-[#F5F2EB] font-sans font-medium uppercase tracking-widest hover:bg-[#4A4742] transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Send Inquiry
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;
