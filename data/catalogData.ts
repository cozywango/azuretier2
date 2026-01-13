
import { CatalogItem } from '../types';

export const hotelCatalog: CatalogItem[] = [
    // Accommodations
    {
        id: 'executive-king',
        category: 'Accommodations',
        title: 'The Executive King',
        shortDesc: 'Spacious 40sqm room with city views and ergonomic workspace.',
        longDesc: 'Perfect for the business traveler. Features a king-sized orthopedic mattress, high-speed fiber Wi-Fi, a dedicated oak desk, and a rainfall shower. Includes complimentary breakfast.',
        price: 'KES 15,000 / Night',
        imageSrc: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1000&auto=format&fit=crop',
        whatsappMessage: 'I am interested in booking the The Executive King'
    },
    {
        id: 'azure-suite',
        category: 'Accommodations',
        title: 'The Azure Suite',
        shortDesc: 'Luxury corner suite with panoramic balcony and lounge area.',
        longDesc: 'Our signature experience. Enjoy 180-degree views, a private lounge separate from the bedroom, Nespresso machine, and VIP turndown service. Ideal for extended stays.',
        price: 'KES 28,000 / Night',
        imageSrc: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000&auto=format&fit=crop',
        whatsappMessage: 'I am interested in booking the The Azure Suite'
    },
    {
        id: 'standard-twin',
        category: 'Accommodations',
        title: 'Standard Twin',
        shortDesc: 'Comfortable double occupancy with modern amenities.',
        longDesc: 'Two queen beds, smart TV with casting capabilities, and soundproof windows. Perfect for colleagues or friends traveling together.',
        price: 'KES 12,500 / Night',
        imageSrc: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000&auto=format&fit=crop',
        whatsappMessage: 'I am interested in booking the Standard Twin'
    },
    {
        id: 'penthouse',
        category: 'Accommodations',
        title: 'The Penthouse',
        shortDesc: 'Top-floor luxury with private terrace and jacuzzi.',
        longDesc: 'The ultimate indulgence. 85sqm of luxury, featuring a private dining area, kitchenette, walk-in closet, and exclusive access to the rooftop pool after hours.',
        price: 'KES 65,000 / Night',
        imageSrc: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop',
        whatsappMessage: 'I am interested in booking the The Penthouse'
    },
    {
        id: 'family-connection',
        category: 'Accommodations',
        title: 'Family Connection',
        shortDesc: 'Two interconnecting rooms for safety and privacy.',
        longDesc: 'Keep the family close but comfortable. One King room connected to a Twin room. Includes kid-friendly amenities and flexible check-out times.',
        price: 'KES 22,000 / Night',
        imageSrc: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1000&auto=format&fit=crop',
        whatsappMessage: 'I am interested in booking the Family Connection'
    },
    // Dining & Leisure
    {
        id: 'horizon-rooftop',
        category: 'Dining & Leisure',
        title: 'The Horizon Rooftop',
        shortDesc: 'Cocktails and tapas with a sunset view.',
        longDesc: 'Open daily from 4 PM - 11 PM. Our signature mixology bar offers the city\'s best sunset views. Reserve a table via WhatsApp for groups larger than four.',
        price: 'A La Carte',
        imageSrc: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop',
        whatsappMessage: 'I am interested in booking a table at The Horizon Rooftop'
    },
    {
        id: 'sapphire-bistro',
        category: 'Dining & Leisure',
        title: 'Sapphire Bistro',
        shortDesc: 'All-day dining serving continental and local fusion.',
        longDesc: 'Breakfast, lunch, and dinner. Famous for our Swahili Curry and authentic Italian pasta. Walk-ins welcome.',
        price: 'Menu on Request',
        imageSrc: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop',
        whatsappMessage: 'I am interested in Sapphire Bistro'
    },
    {
        id: 'in-room-dining',
        category: 'Dining & Leisure',
        title: 'In-Room Dining',
        shortDesc: '24-hour service delivered to your door.',
        longDesc: 'A curated selection of our bistro favorites, available at any hour. Includes late-night snacks and premium beverage service.',
        price: '+10% Service Charge',
        imageSrc: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1000&auto=format&fit=crop',
        whatsappMessage: 'I would like to order In-Room Dining'
    },
    {
        id: 'sunday-brunch',
        category: 'Dining & Leisure',
        title: 'Sunday Brunch',
        shortDesc: 'Infinite buffet with live jazz band.',
        longDesc: 'Every Sunday 11 AM - 3 PM. Bottomless mimosas, live carving stations, and dessert bar. Advanced booking recommended.',
        price: 'KES 4,500 pp',
        imageSrc: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1000&auto=format&fit=crop',
        whatsappMessage: 'I would like to book for Sunday Brunch'
    },
    // Events & Business
    {
        id: 'grand-ballroom',
        category: 'Events & Business',
        title: 'Grand Ballroom',
        shortDesc: 'Capacity: 200 Pax. Theater style setup available.',
        longDesc: 'Equipped with dual projectors, surround sound, and variable lighting. Ideal for weddings, product launches, and gala dinners. Catering packages available.',
        price: 'Inquire for Quote',
        imageSrc: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000&auto=format&fit=crop',
        whatsappMessage: 'I am interested in booking the Grand Ballroom'
    },
    {
        id: 'boardroom-a',
        category: 'Events & Business',
        title: 'Boardroom A',
        shortDesc: 'Capacity: 12 Pax. Video conferencing enabled.',
        longDesc: 'Soundproof executive meeting space with 4K screen, Polycom conference phone, and whiteboard walls. Coffee and tea station included.',
        price: 'KES 5,000 / Hour',
        imageSrc: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=1000&auto=format&fit=crop',
        whatsappMessage: 'I am interested in booking Boardroom A'
    },
    {
        id: 'co-work-hub',
        category: 'Events & Business',
        title: 'The Co-Work Hub',
        shortDesc: 'Open seating for guests and digital nomads.',
        longDesc: 'High-speed internet access in a quiet, climate-controlled environment. Power outlets at every seat.',
        price: 'Free for Guests',
        imageSrc: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
        whatsappMessage: 'I am interested in The Co-Work Hub'
    }
];
