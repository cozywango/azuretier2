
import React from 'react';
import { CatalogItem } from '../types';

interface CatalogCardProps {
    item: CatalogItem;
    onClick: (item: CatalogItem) => void;
}

const CatalogCard: React.FC<CatalogCardProps> = ({ item, onClick }) => {
    return (
        <div className="group flex flex-col gap-4 cursor-pointer" onClick={() => onClick(item)}>
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#EBE7DE] rounded-sm">
                <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>

            <div className="flex flex-col">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="text-xl font-serif font-medium text-[#2C2A26]">{item.title}</h3>
                    <span className="text-sm font-medium text-[#2C2A26] bg-[#EBE7DE] px-2 py-1 rounded-sm">{item.price}</span>
                </div>
                <p className="text-sm font-light text-[#5D5A53] line-clamp-2">{item.shortDesc}</p>
            </div>
        </div>
    );
};

export default CatalogCard;
