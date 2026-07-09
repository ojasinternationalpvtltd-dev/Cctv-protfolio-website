import {
  BadgeCheck,
  Building2,
  Cable,
  Camera,
  Clock3,
  DoorOpen,
  Fingerprint,
  Headphones,
  Home,
  Network,
  RadioTower,
  Router,
  Server,
  ShieldCheck,
  Sparkles,
  Video
} from "lucide-react";
import type { BlogPost, Service } from "@/types/site";

export const company = {
  name: "Ojas International Pvt. Ltd.",
  owner: "Kriti",
  phone: "+977 9801989840, +977 9801989841",
  primaryPhone: "+9779801989840",
  email: "ojasinternationalpvtltd@gmail.com",
  address: "Naya Thimi, Bhaktapur, Nepal",
  hours: "Sunday - Friday, 9:00 AM - 6:00 PM",
  whatsapp: "https://wa.me/9779801989840"
};

export const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "350+", label: "Happy Clients" },
  { value: "10+", label: "Years of Experience" },
  { value: "18+", label: "Cities Served" }
];

export const whyChoose = [
  { icon: ShieldCheck, title: "Experienced Professionals", text: "Field-tested installation teams for residential, commercial and enterprise deployments." },
  { icon: BadgeCheck, title: "Premium Products", text: "Reliable equipment from trusted security, networking and infrastructure brands." },
  { icon: Sparkles, title: "Certified Installation", text: "Clean cabling, documented handover and standards-based configuration." },
  { icon: Network, title: "Customized Solutions", text: "Every system is planned around your site, coverage goals, users and budget." },
  { icon: Headphones, title: "Reliable Support", text: "Responsive maintenance support, upgrades and annual maintenance contracts." },
  { icon: Clock3, title: "Affordable Pricing", text: "Transparent proposals that balance quality, durability and long-term value." }
];

const sharedFaqs = [
  { question: "Do you provide site surveys?", answer: "Yes. Ojas International can inspect your site, understand coverage requirements and recommend a practical solution." },
  { question: "Can systems be expanded later?", answer: "Yes. We design with future expansion in mind, including extra ports, storage options and structured cabling capacity." },
  { question: "Do you offer maintenance?", answer: "Yes. AMC plans are available for preventive checks, troubleshooting, firmware updates and system health reporting." }
];

export const services: Service[] = [
  {
    slug: "cctv-installation",
    title: "CCTV Installation",
    category: "Security",
    description: "HD and IP CCTV systems with smart coverage planning, remote viewing and secure recording.",
    image: "/images/cctv-installation.jpg",
    icon: Camera,
    benefits: ["Clear video evidence", "Remote mobile monitoring", "Deterrence for intrusions", "Scalable storage options"],
    features: ["Site survey and camera placement", "DVR/NVR setup", "Mobile app configuration", "Night vision and motion alerts"],
    process: ["Requirement discovery", "Coverage map", "Cabling and mounting", "Configuration and handover"],
    applications: ["Homes", "Offices", "Retail stores", "Factories", "Warehouses"],
    equipment: ["IP cameras", "DVR/NVR", "PoE switches", "Surveillance HDD", "UPS"],
    faqs: sharedFaqs
  },
  {
    slug: "networking",
    title: "Networking Solutions",
    category: "Networking",
    description: "Reliable LAN, WAN and Wi-Fi networks designed for secure and consistent business connectivity.",
    image: "/images/networking-solution.jpg",
    icon: Router,
    benefits: ["Stable connectivity", "Better coverage", "Secure access", "Centralized management"],
    features: ["Network design", "Switching and routing", "Firewall-ready topology", "Documentation"],
    process: ["Audit", "Design", "Deployment", "Testing"],
    applications: ["Corporate offices", "Schools", "Hotels", "Hospitals"],
    equipment: ["Routers", "Switches", "Access points", "Patch panels"],
    faqs: sharedFaqs
  },
  {
    slug: "fiber-optic",
    title: "Fiber Optic Solutions",
    category: "Networking",
    description: "High-speed fiber backbone installation for campuses, buildings and long-distance connectivity.",
    image: "/images/fiber-optic-solution.jpg",
    icon: Cable,
    benefits: ["High bandwidth", "Low latency", "Long-distance performance", "Future-ready capacity"],
    features: ["Fiber laying", "Splicing", "OTDR testing", "Rack termination"],
    process: ["Route planning", "Cable deployment", "Splicing", "Testing and labeling"],
    applications: ["Campuses", "ISP links", "Industrial sites", "Multi-floor buildings"],
    equipment: ["Fiber cable", "ODF", "SFP modules", "Media converters"],
    faqs: sharedFaqs
  },
  {
    slug: "access-control",
    title: "Access Control",
    category: "Security",
    description: "Smart entry systems that protect sensitive areas and create traceable access records.",
    image: "/images/access-control.webp",
    icon: DoorOpen,
    benefits: ["Controlled entry", "Audit trails", "Improved safety", "Role-based permissions"],
    features: ["Card and PIN access", "Door locks", "Exit buttons", "Time schedules"],
    process: ["Door assessment", "Controller setup", "Lock installation", "User enrollment"],
    applications: ["Offices", "Server rooms", "Banks", "Schools"],
    equipment: ["Controllers", "Readers", "EM locks", "Exit switches"],
    faqs: sharedFaqs
  },
  {
    slug: "biometric",
    title: "Biometric Attendance",
    category: "Security",
    description: "Fingerprint and face attendance systems for accurate workforce time management.",
    image: "/images/biometric-attendance.jpg",
    icon: Fingerprint,
    benefits: ["Accurate attendance", "Reduced proxy punching", "Payroll-ready reports", "Easy user management"],
    features: ["Fingerprint and face terminals", "Attendance reports", "Department setup", "Cloud-ready options"],
    process: ["Policy mapping", "Device installation", "User enrollment", "Report training"],
    applications: ["Companies", "Factories", "Schools", "Hospitals"],
    equipment: ["Biometric terminals", "RFID cards", "Attendance software"],
    faqs: sharedFaqs
  },
  {
    slug: "intercom",
    title: "Intercom & Video Door Phones",
    category: "Security",
    description: "Modern communication and visitor verification systems for homes, apartments and offices.",
    image: "/images/intercom-video-door-phone.jpeg",
    icon: Video,
    benefits: ["Visitor verification", "Convenient communication", "Improved entry safety", "Apartment-ready setup"],
    features: ["Indoor monitors", "Outdoor stations", "Multi-room calling", "Gate integration"],
    process: ["Point planning", "Cable routing", "Device mounting", "Testing"],
    applications: ["Homes", "Apartments", "Offices", "Gated properties"],
    equipment: ["Video door phones", "Intercom handsets", "Power supplies"],
    faqs: sharedFaqs
  },
  {
    slug: "server-installation",
    title: "Server & Rack Installation",
    category: "Infrastructure",
    description: "Structured server room setup with rack mounting, cable management and power planning.",
    image: "/images/server-rack-installation.jpg",
    icon: Server,
    benefits: ["Cleaner infrastructure", "Better uptime", "Simplified maintenance", "Professional labeling"],
    features: ["Rack layout", "Patch panel setup", "UPS planning", "Cable dressing"],
    process: ["Room assessment", "Rack installation", "Device mounting", "Documentation"],
    applications: ["Offices", "Data rooms", "Schools", "Hospitals"],
    equipment: ["Server racks", "Patch panels", "UPS", "PDUs"],
    faqs: sharedFaqs
  },
  {
    slug: "smart-home",
    title: "Smart Home Automation",
    category: "Infrastructure",
    description: "Connected security, lighting, Wi-Fi and access experiences for intelligent homes.",
    image: "/images/smart-home-automation.jpg",
    icon: Home,
    benefits: ["Convenient control", "Energy awareness", "Integrated security", "Premium living experience"],
    features: ["Smart switches", "Camera integration", "Wi-Fi planning", "Voice-ready controls"],
    process: ["Lifestyle discovery", "Device selection", "Installation", "App training"],
    applications: ["Villas", "Apartments", "Premium residences", "Home offices"],
    equipment: ["Smart switches", "Sensors", "Controllers", "Cameras"],
    faqs: sharedFaqs
  },
  {
    slug: "wifi-solutions",
    title: "Wi-Fi Solutions",
    category: "Networking",
    description: "High-coverage managed Wi-Fi for offices, hotels, schools and homes.",
    image: "/images/wifi-solution.jpg",
    icon: RadioTower,
    benefits: ["Stronger coverage", "Guest access", "Roaming support", "Central control"],
    features: ["Heatmap planning", "Access point mounting", "SSID segmentation", "Speed testing"],
    process: ["Coverage check", "AP planning", "Installation", "Optimization"],
    applications: ["Hotels", "Offices", "Schools", "Homes"],
    equipment: ["Access points", "Controllers", "PoE switches"],
    faqs: sharedFaqs
  },
  {
    slug: "structured-cabling",
    title: "Structured Cabling",
    category: "Infrastructure",
    description: "Neat copper and fiber cabling foundations for dependable data, voice and camera systems.",
    image: "/images/structured-cabling.jpg",
    icon: Cable,
    benefits: ["Organized wiring", "Easy troubleshooting", "Better reliability", "Future expansion"],
    features: ["Cat6 cabling", "Patch panels", "Labeling", "Testing"],
    process: ["Route design", "Cable pulling", "Termination", "Certification"],
    applications: ["Offices", "Buildings", "Retail", "Warehouses"],
    equipment: ["Cat6 cable", "IO boxes", "Patch cords", "Racks"],
    faqs: sharedFaqs
  },
  {
    slug: "amc",
    title: "Annual Maintenance Contracts",
    category: "Maintenance",
    description: "Preventive maintenance and priority support for CCTV, networking and IT infrastructure.",
    image: "/images/annual-maintenance-contract.png",
    icon: Headphones,
    benefits: ["Reduced downtime", "Priority response", "Preventive checks", "Predictable costs"],
    features: ["Scheduled inspection", "Health reports", "Cleaning and testing", "Troubleshooting"],
    process: ["Asset audit", "Plan selection", "Periodic visits", "Support reporting"],
    applications: ["Offices", "Retail chains", "Schools", "Factories"],
    equipment: ["Testing tools", "Spare parts", "Maintenance reports"],
    faqs: sharedFaqs
  },
  {
    slug: "lan-setup",
    title: "LAN Setup",
    category: "Networking",
    description: "Fast, organized local networks for desktops, printers, servers, cameras and Wi-Fi devices.",
    image: "/images/lan-setup.webp",
    icon: Network,
    benefits: ["Reliable internal access", "Printer sharing", "Camera integration", "Clean expansion"],
    features: ["IP planning", "Switch installation", "Cable testing", "Device labeling"],
    process: ["Device mapping", "Wiring", "Switch setup", "Testing"],
    applications: ["Offices", "Labs", "Schools", "Shops"],
    equipment: ["Switches", "Patch panels", "LAN cable", "Routers"],
    faqs: sharedFaqs
  }
];

export const industries = ["Residential", "Commercial", "Schools", "Hospitals", "Hotels", "Banks", "Factories", "Retail", "Government", "Warehouses"];

export const projects = [
  { name: "Smart CCTV Upgrade", location: "Bhaktapur", type: "Commercial", services: "IP CCTV, PoE Network", date: "May 2026" },
  { name: "Campus Fiber Backbone", location: "Lalitpur", type: "Education", services: "Fiber Optic, Rack Setup", date: "April 2026" },
  { name: "Hotel Wi-Fi & Access", location: "Pokhara", type: "Hospitality", services: "Wi-Fi, Access Control", date: "March 2026" }
];

export const brands = ["Hikvision", "Dahua", "Jovision", "D-LINK", "Palex", "Cannon", "Hp", "Haier", "Digicom", "Wixa", "Midea"];

export const testimonials = [
  { quote: "Ojas delivered a clean CCTV and network installation with clear handover and dependable support.", name: "Operations Manager", company: "Ultrashine Bhaktapur" },
  { quote: "Their team understood our building layout and designed a practical fiber and Wi-Fi solution.", name: "IT Coordinator", company: "NIST Banepa and Lokanthali" },
  { quote: "Professional service, neat cabling and quick response whenever we need assistance.", name: "Facility Lead", company: "Cryptogem Lazimpat" }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-cctv-cameras",
    title: "How to Choose CCTV Cameras for Your Property",
    excerpt: "A practical guide to camera types, resolution, night vision, storage and remote monitoring.",
    category: "Security",
    image: "/images/blog-cctv.svg",
    author: "Ojas Security Team",
    date: "2026-05-12",
    readTime: "5 min read",
    content: [
      "Choosing the right CCTV camera begins with the purpose of each location. Entrances need facial clarity, parking areas need wider coverage and cash counters need close detail.",
      "Resolution, lens angle, low-light capability and storage duration should be planned together. A premium installation balances camera count with the right placement instead of adding unnecessary devices.",
      "For businesses, IP camera systems with PoE switching and secure remote access are easier to scale and maintain over time."
    ]
  },
  {
    slug: "benefits-of-fiber-networking",
    title: "Benefits of Fiber Networking for Modern Buildings",
    excerpt: "Why fiber optic infrastructure is becoming the preferred backbone for high-speed connectivity.",
    category: "Networking",
    image: "/images/blog-fiber.svg",
    author: "Ojas Networking Team",
    date: "2026-04-18",
    readTime: "4 min read",
    content: [
      "Fiber networking supports high bandwidth over longer distances, making it ideal for campuses, warehouses, hotels and multi-floor offices.",
      "It is less affected by electrical interference and provides a strong foundation for cameras, Wi-Fi, servers and future applications.",
      "A good fiber project includes route planning, splicing, OTDR testing and proper labeling for maintenance."
    ]
  },
  {
    slug: "office-networking-guide",
    title: "Office Networking Guide for Growing Businesses",
    excerpt: "Build a stable network foundation for users, printers, servers, Wi-Fi and security systems.",
    category: "Infrastructure",
    image: "/images/blog-network.svg",
    author: "Ojas Infrastructure Team",
    date: "2026-03-26",
    readTime: "6 min read",
    content: [
      "A reliable office network starts with structured cabling, quality switches and a clear IP plan.",
      "Separate networks for staff, guests, cameras and critical devices improve performance and security.",
      "Documentation is essential. Labels, diagrams and tested ports make future troubleshooting faster."
    ]
  },
  {
    slug: "access-control-systems",
    title: "Access Control Systems: What Businesses Should Know",
    excerpt: "Understand readers, controllers, locks and policies before securing your entry points.",
    category: "Security",
    image: "/images/blog-access.svg",
    author: "Ojas Security Team",
    date: "2026-02-15",
    readTime: "5 min read",
    content: [
      "Access control systems help organizations manage who can enter sensitive areas and when.",
      "The best setup depends on door type, user count, emergency exit requirements and reporting needs.",
      "Integrating access control with attendance or CCTV can create a stronger security workflow."
    ]
  }
];
