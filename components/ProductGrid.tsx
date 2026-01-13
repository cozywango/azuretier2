/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useMemo } from 'react';
import { hotelCatalog } from '../data/catalogData';
import { CatalogItem } from '../types';
import CatalogCard from './CatalogCard';
import CatalogModal from './CatalogModal';

// Filter display names
const filterTabs = ['All', 'Suites', 'Dining', 'Events'];

// Map display names to data categories
const categoryMap: Record<string, string> = {
  'Suites': 'Accommodations',
  'Dining': 'Dining & Leisure',
  'Events': 'Events & Business'
};

interface ProductGridProps {
  onProductClick: (product: any) => void; // Keeping prop to avoid breaking App.tsx immediately, though unused
}

const ProductGrid: React.FC<ProductGridProps> = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedItem, setSelectedItem] = useState<CatalogItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems = useMemo(() => {
    if (activeTab === 'All') return hotelCatalog;
    const dataCategory = categoryMap[activeTab];
    return hotelCatalog.filter(item => item.category === dataCategory);
  }, [activeTab]);

  const handleCardClick = (item: CatalogItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  return (
    <section id="products" className="py-32 px-6 md:px-12 bg-[#F5F2EB]">
      <div className="max-w-[1800px] mx-auto">

        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-24 space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif text-[#2C2A26]">Accommodations & Spaces</h2>

          {/* Minimal Filter */}
          <div className="flex flex-wrap justify-center gap-8 pt-4 border-t border-[#D6D1C7]/50 w-full max-w-2xl">
            {filterTabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm uppercase tracking-widest pb-1 border-b transition-all duration-300 ${activeTab === tab
                    ? 'border-[#2C2A26] text-[#2C2A26]'
                    : 'border-transparent text-[#A8A29E] hover:text-[#2C2A26]'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Large Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          {filteredItems.map(item => (
            <CatalogCard key={item.id} item={item} onClick={handleCardClick} />
          ))}
        </div>
      </div>

      <CatalogModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default ProductGrid;
