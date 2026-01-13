
import React, { useState } from 'react';
import { hotelCatalog } from '../data/catalogData';
import CatalogCard from './CatalogCard';
import CatalogModal from './CatalogModal';
import { CatalogItem } from '../types';

const categories = ['All', 'Accommodations', 'Dining & Leisure', 'Events & Business'];

const CatalogGrid: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedItem, setSelectedItem] = useState<CatalogItem | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredItems = selectedCategory === 'All'
        ? hotelCatalog
        : hotelCatalog.filter(item => item.category === selectedCategory);

    const handleCardClick = (item: CatalogItem) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedItem(null), 300); // Clear after animation
    };

    return (
        <div className="pt-32 pb-24 min-h-screen bg-[#F5F2EB]">
            <div className="max-w-[1800px] mx-auto px-8">
                {/* Header Section */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-serif font-medium text-[#2C2A26] mb-4">
                        Experience Luxury, Simplified.
                    </h1>
                    <p className="text-lg text-[#5D5A53] max-w-2xl mx-auto font-light">
                        Browse our suites, dining, and amenities. Book directly via WhatsApp for instant confirmation.
                    </p>
                </div>

                {/* Filter Bar */}
                <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animate-delay-200 sticky top-24 z-30 py-4 bg-[#F5F2EB]/95 backdrop-blur-sm -mx-4 px-4 border-b border-[#D6D1C7]/50 md:border-none md:static md:p-0 md:bg-transparent">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm uppercase tracking-widest transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-[#2C2A26] text-[#F5F2EB]'
                                    : 'bg-white border border-[#D6D1C7] text-[#5D5A53] hover:bg-[#EBE7DE]'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up animate-delay-400">
                    {filteredItems.map((item) => (
                        <CatalogCard
                            key={item.id}
                            item={item}
                            onClick={handleCardClick}
                        />
                    ))}
                </div>
            </div>

            <CatalogModal
                item={selectedItem}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </div>
    );
};

export default CatalogGrid;
