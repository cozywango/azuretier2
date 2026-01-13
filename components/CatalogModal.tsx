
import React, { useEffect } from 'react';
import { CatalogItem } from '../types';

interface CatalogModalProps {
    item: CatalogItem | null;
    isOpen: boolean;
    onClose: () => void;
}

const CatalogModal: React.FC<CatalogModalProps> = ({ item, isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !item) return null;

    const handleWhatsAppClick = () => {
        const defaultPhone = '123456789'; // Placeholder as per prompt, normally would come from config
        const encodedMessage = encodeURIComponent(item.whatsappMessage);
        const url = `https://wa.me/${defaultPhone}?text=${encodedMessage}`;
        window.open(url, '_blank');
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 sm:px-6">
            <div
                className="absolute inset-0 bg-[#2C2A26]/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            <div className="relative w-full max-w-4xl bg-[#F5F2EB] shadow-2xl overflow-hidden animate-fade-in-up rounded-sm flex flex-col md:flex-row max-h-[90vh] md:max-h-[600px]">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 z-10 bg-white/50 backdrop-blur-md rounded-full hover:bg-white transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#2C2A26]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Image Side */}
                <div className="w-full md:w-1/2 h-64 md:h-full bg-[#EBE7DE]">
                    <img
                        src={item.imageSrc}
                        alt={item.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
                    <span className="text-xs font-medium tracking-widest uppercase text-[#5D5A53] mb-3">{item.category}</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#2C2A26] mb-4">{item.title}</h2>
                    <p className="text-[#2C2A26] font-medium text-lg mb-6">{item.price}</p>

                    <div className="prose prose-stone text-[#5D5A53] mb-8 leading-relaxed">
                        <p>{item.longDesc}</p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-[#D6D1C7]">
                        <button
                            onClick={handleWhatsAppClick}
                            className="w-full py-4 bg-[#2C2A26] text-[#F5F2EB] font-serif hover:bg-[#4A4742] transition-colors duration-300 flex items-center justify-center gap-2 group"
                        >
                            <span>Check Availability via WhatsApp</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatalogModal;
