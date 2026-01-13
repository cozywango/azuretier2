/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#EBE7DE]">

      {/* Introduction / Story */}
      <div className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto flex flex-col md:flex-row items-start gap-16 md:gap-32">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-6xl font-serif text-[#2C2A26] leading-tight">
            Defined by elegance, <br /> designed for comfort.
          </h2>
        </div>
        <div className="md:w-2/3 max-w-2xl">
          <p className="text-lg md:text-xl text-[#5D5A53] font-light leading-relaxed mb-8">
            Azure Horizon Suites was founded on a simple promise: business travel shouldn't feel transactional. It should feel like a homecoming.
          </p>
          <p className="text-lg md:text-xl text-[#5D5A53] font-light leading-relaxed mb-8">
            In an age of busy lobbies and impersonal service, we offer a sanctuary of calm, tailored specifically for the modern professional and the leisure seeker.
          </p>
          <img
            src="https://images.pexels.com/photos/6583355/pexels-photo-6583355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="The Azure Lounge"
            className="w-full h-[400px] object-cover grayscale contrast-[0.9] brightness-110 mt-12"
          />
          <p className="text-sm font-medium uppercase tracking-widest text-[#A8A29E] mt-4">
            The Azure Lounge, Nairobi
          </p>
        </div>
      </div>

      {/* Philosophy Blocks (Formerly Features) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="order-2 lg:order-1 relative h-[500px] lg:h-auto overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1200"
            alt="Natural Stone Texture"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
          />
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center p-12 lg:p-24 bg-[#D6D1C7]">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#5D5A53] mb-6">Culinary Excellence</span>
          <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[#2C2A26] leading-tight">
            Flavors that linger <br /> in memory.
          </h3>
          <p className="text-lg text-[#5D5A53] font-light leading-relaxed mb-12 max-w-md">
            From our rooftop lounge to the 24-hour Sapphire Bistro, experience local fusion and continental classics. Our ingredients are sourced daily, ensuring every meal is a celebration of the region.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-[#2C2A26] text-[#F5F2EB]">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-6">Business & Events</span>
          <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[#F5F2EB] leading-tight">
            Productivity, redefined.
          </h3>
          <p className="text-lg text-[#A8A29E] font-light leading-relaxed mb-12 max-w-md">
            State-of-the-art conference rooms and executive boardrooms tailored for focus. High-speed fiber, acoustic soundproofing, and premium service ensure your meetings run flawlessly.
          </p>
        </div>
        <div className="relative h-[500px] lg:h-auto overflow-hidden group">
          <img
            src="https://images.pexels.com/photos/6801917/pexels-photo-6801917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Woman sitting on wooden floor reading"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 brightness-90"
          />
        </div>
      </div>
    </section>
  );
};

export default About;