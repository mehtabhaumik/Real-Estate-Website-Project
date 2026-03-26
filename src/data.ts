import { Property, Agent } from './types';

export const AGENT: Agent = {
  id: 'agent-1',
  name: 'Nathaniel Sterling',
  title: 'Senior Real Estate Advisor',
  bio: 'With over 15 years of experience in the Riverview and Tampa Bay area, Nathaniel has helped hundreds of families find their perfect homes. He specializes in luxury waterfront properties and new construction developments.',
  phone: '(813) 555-0123',
  email: 'nathaniel@riverviewrealty.com',
  photo: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=400&h=500',
  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  recentSales: [
    { id: 's1', address: '124 Harbor View Dr, Riverview', price: 850000, date: '2024-02-15' },
    { id: 's2', address: '455 Oak Creek Ln, Brandon', price: 425000, date: '2024-01-20' },
    { id: 's3', address: '890 Palm River Blvd, Tampa', price: 1200000, date: '2023-12-05' },
  ]
};

export const PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'Modern Waterfront Estate',
    price: 1250000,
    address: '742 Alafia River Dr',
    city: 'Riverview',
    state: 'FL',
    zip: '33569',
    type: 'House',
    bedrooms: 5,
    bathrooms: 4.5,
    sqft: 4200,
    description: 'Stunning contemporary home situated on the banks of the Alafia River. This architectural masterpiece features floor-to-ceiling windows, a private dock, and a resort-style infinity pool. The open-concept kitchen is a chef\'s dream with top-of-the-line Wolf appliances.',
    features: ['Waterfront', 'Private Dock', 'Infinity Pool', 'Smart Home System', 'Wine Cellar'],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200'
    ],
    isFeatured: true,
    agentId: 'agent-1',
    coordinates: { lat: 27.8661, lng: -82.3251 }
  },
  {
    id: 'prop-2',
    title: 'Luxury Golf Course Villa',
    price: 785000,
    address: '1502 Summerfield Blvd',
    city: 'Riverview',
    state: 'FL',
    zip: '33579',
    type: 'House',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3100,
    description: 'Located in the prestigious Summerfield community, this elegant villa offers breathtaking views of the 18th hole. Meticulously maintained with high-end finishes throughout, including crown molding and hardwood floors.',
    features: ['Golf Course View', 'Gated Community', 'Screened Lanai', 'Outdoor Kitchen'],
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687940-4e2003e25427?auto=format&fit=crop&q=80&w=1200'
    ],
    isFeatured: true,
    agentId: 'agent-1',
    coordinates: { lat: 27.8321, lng: -82.3111 }
  },
  {
    id: 'prop-3',
    title: 'Charming Family Home',
    price: 450000,
    address: '3310 Panther Trace Blvd',
    city: 'Riverview',
    state: 'FL',
    zip: '33579',
    type: 'House',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2100,
    description: 'Perfect starter home in the highly sought-after Panther Trace neighborhood. Features a spacious backyard, updated kitchen, and access to community pools and parks.',
    features: ['Fenced Yard', 'Updated Kitchen', 'Community Pool', 'New Roof (2023)'],
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200'
    ],
    isFeatured: true,
    agentId: 'agent-1',
    coordinates: { lat: 27.8151, lng: -82.3321 }
  },
  {
    id: 'prop-4',
    title: 'Modern Downtown Condo',
    price: 325000,
    address: '101 Channelside Dr #402',
    city: 'Tampa',
    state: 'FL',
    zip: '33602',
    type: 'Condo',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    description: 'Experience urban living at its finest in this sleek Channelside condo. Walking distance to Sparkman Wharf, Water Street, and the Riverwalk.',
    features: ['City Views', 'Fitness Center', 'Rooftop Pool', 'Assigned Parking'],
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1200'
    ],
    agentId: 'agent-1',
    coordinates: { lat: 27.9441, lng: -82.4451 }
  },
  {
    id: 'prop-5',
    title: 'Spacious Brandon Family Home',
    price: 525000,
    address: '1204 Oak Creek Dr',
    city: 'Brandon',
    state: 'FL',
    zip: '33511',
    type: 'House',
    bedrooms: 4,
    bathrooms: 2.5,
    sqft: 2800,
    description: 'Beautifully renovated home in the heart of Brandon. Features a modern kitchen with quartz countertops, a large master suite, and a private screened-in pool area perfect for entertaining.',
    features: ['Private Pool', 'Renovated Kitchen', 'Large Master Suite', 'No HOA'],
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&q=80&w=1200'
    ],
    agentId: 'agent-1',
    coordinates: { lat: 27.9378, lng: -82.2859 }
  },
  {
    id: 'prop-6',
    title: 'Sleek Tampa Heights Townhome',
    price: 475000,
    address: '1902 N Highland Ave',
    city: 'Tampa',
    state: 'FL',
    zip: '33602',
    type: 'Townhouse',
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 1850,
    description: 'Modern living in the historic Tampa Heights. This three-story townhome features a rooftop terrace with city views, high ceilings, and industrial-chic finishes.',
    features: ['Rooftop Terrace', 'City Views', 'Walkable Location', 'Modern Finishes'],
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1513584684374-8bdb7489feef?auto=format&fit=crop&q=80&w=1200'
    ],
    agentId: 'agent-1',
    coordinates: { lat: 27.9628, lng: -82.4597 }
  },
  {
    id: 'prop-7',
    title: 'Cozy Brandon Condo',
    price: 285000,
    address: '402 Providence Rd #201',
    city: 'Brandon',
    state: 'FL',
    zip: '33511',
    type: 'Condo',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1100,
    description: 'Maintenance-free living in a gated Brandon community. Recently updated with new flooring and paint. Close to shopping, dining, and major highways.',
    features: ['Gated Community', 'Community Pool', 'Low HOA', 'Updated Flooring'],
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200'
    ],
    agentId: 'agent-1',
    coordinates: { lat: 27.9258, lng: -82.3059 }
  },
  {
    id: 'prop-8',
    title: 'South Tampa Luxury Residence',
    price: 1850000,
    address: '2504 W Morrison Ave',
    city: 'Tampa',
    state: 'FL',
    zip: '33606',
    type: 'House',
    bedrooms: 5,
    bathrooms: 5.5,
    sqft: 5200,
    description: 'Exquisite custom-built home in the heart of South Tampa. Features a grand foyer, gourmet kitchen, home theater, and a stunning outdoor living space with a summer kitchen and heated pool.',
    features: ['Gourmet Kitchen', 'Home Theater', 'Heated Pool', 'Summer Kitchen', 'Top Rated Schools'],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200'
    ],
    isFeatured: true,
    agentId: 'agent-1',
    coordinates: { lat: 27.9358, lng: -82.4859 }
  },
  {
    id: 'prop-9',
    title: 'Brickell Skyline Penthouse',
    price: 2450000,
    address: '1200 Brickell Bay Dr #PH01',
    city: 'Miami',
    state: 'FL',
    zip: '33131',
    type: 'Condo',
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 2800,
    description: 'Breathtaking panoramic views of Biscayne Bay and the Miami skyline from this ultra-luxury penthouse. Features include a private rooftop terrace, floor-to-ceiling glass walls, and access to world-class building amenities.',
    features: ['Panoramic Views', 'Rooftop Terrace', 'Private Elevator', '24/7 Concierge', 'Infinity Pool'],
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200'
    ],
    isFeatured: true,
    agentId: 'agent-1',
    coordinates: { lat: 25.7617, lng: -80.1918 }
  },
  {
    id: 'prop-10',
    title: 'Coral Gables Mediterranean Villa',
    price: 3200000,
    address: '4205 Granada Blvd',
    city: 'Coral Gables',
    state: 'FL',
    zip: '33134',
    type: 'House',
    bedrooms: 6,
    bathrooms: 5,
    sqft: 5500,
    description: 'Timeless Mediterranean architecture meets modern luxury in this stunning Coral Gables estate. Nestled on a lush, oversized lot, this home offers unparalleled privacy, a grand courtyard, and exquisite finishes throughout.',
    features: ['Historic Charm', 'Grand Courtyard', 'Guest House', 'Oversized Lot', 'Wine Cellar'],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687940-4e2003e25427?auto=format&fit=crop&q=80&w=1200'
    ],
    agentId: 'agent-1',
    coordinates: { lat: 25.7215, lng: -80.2684 }
  },
  {
    id: 'prop-11',
    title: 'Wynwood Artistic Loft',
    price: 650000,
    address: '250 NW 24th St #305',
    city: 'Miami',
    state: 'FL',
    zip: '33127',
    type: 'Condo',
    bedrooms: 1,
    bathrooms: 1.5,
    sqft: 1100,
    description: 'Live in the heart of Miami\'s most vibrant arts district. This industrial-style loft features exposed concrete, high ceilings, and floor-to-ceiling windows overlooking the famous Wynwood Walls.',
    features: ['Industrial Style', 'High Ceilings', 'Art District Location', 'Rooftop Lounge'],
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1536376074432-a228d7157ec2?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200'
    ],
    agentId: 'agent-1',
    coordinates: { lat: 25.8008, lng: -80.1993 }
  }
];

export const TEAM: any[] = [
  {
    name: 'Nathaniel Sterling',
    role: 'Founder & Lead Agent',
    bio: 'Nathaniel has a passion for real estate and a deep love for the Riverview community.',
    photo: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    name: 'Michael Chen',
    role: 'Buyer Specialist',
    bio: 'Michael excels at finding the perfect hidden gems for his clients.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Marketing Director',
    bio: 'Elena ensures every listing gets the premium exposure it deserves.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400'
  }
];
