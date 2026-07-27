export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: "alert-triangle" | "wrench" | "droplet" | "waves" | "home" | "shield-check";
  features: string[];
}

export interface StepItem {
  stepNumber: string;
  title: string;
  description: string;
  iconName: "phone-call" | "clock" | "wrench" | "check-circle";
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
  avatarUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "emergency-repairs",
    title: "Emergency Repairs",
    shortDesc: "Burst pipes, leaks, and urgent issues handled immediately. Available 24/7.",
    fullDesc: "Plumbing emergencies can strike at any hour. Our rapid-response emergency team is equipped with advanced diagnostic tools to resolve severe pipe bursts, sewage backups, and main shut-off failures within minutes.",
    iconName: "alert-triangle",
    features: ["Sub-60 Minute Response Time", "24/7/365 Emergency Dispatch", "No Hidden After-Hours Surcharges", "Immediate Leak Containment"]
  },
  {
    id: "drain-cleaning",
    title: "Drain Cleaning",
    shortDesc: "Professional drain clearing and maintenance to prevent future clogs.",
    fullDesc: "Stubborn clogs and slow drains can lead to major pipe damage. We utilize high-pressure hydro-jetting and video camera drain inspections to clear grease, tree roots, and mineral buildup completely.",
    iconName: "wrench",
    features: ["HD Video Camera Inspections", "Eco-Friendly Hydro-Jetting", "Hair & Root Extraction", "1-Year Flow Guarantee"]
  },
  {
    id: "leak-detection",
    title: "Leak Detection",
    shortDesc: "Advanced technology to locate hidden leaks before they cause damage.",
    fullDesc: "Hidden leaks behind walls or beneath concrete slabs can destroy structural integrity. Our non-invasive acoustic sensors and thermal imaging pinpoint moisture sources with zero unnecessary wall damage.",
    iconName: "droplet",
    features: ["Acoustic Sensor Mapping", "Thermal Infrared Cameras", "Slab Leak Diagnostics", "Precision Spot Repair"]
  },
  {
    id: "pipe-installation",
    title: "Pipe Installation",
    shortDesc: "New pipe installations and replacements with quality materials.",
    fullDesc: "Whether upgrading aging galvanized pipes or plumbing a new home addition, we install durable PEX and copper piping designed to last for decades without corrosion.",
    iconName: "waves",
    features: ["Copper & PEX Repiping", "Code-Compliant Plumbing", "Corrosion Resistant", "Lifetime Workmanship Warranty"]
  },
  {
    id: "water-heater-service",
    title: "Water Heater Service",
    shortDesc: "Installation, repair, and maintenance of water heating systems.",
    fullDesc: "From conventional tank heaters to modern high-efficiency tankless units, our certified technicians repair heating elements, flush sediment, and install top-rated replacement models.",
    iconName: "home",
    features: ["Tankless & Standard Tanks", "Same-Day Heating Fixes", "Anode Rod Replacement", "Energy Star Efficient Upgrades"]
  },
  {
    id: "preventive-maintenance",
    title: "Preventive Maintenance",
    shortDesc: "Regular inspections and maintenance to keep your plumbing system healthy.",
    fullDesc: "Avoid costly emergency repairs with our comprehensive annual plumbing inspection plan. We inspect pressure regulators, valves, drains, and water lines to keep your system performing flawlessly.",
    iconName: "shield-check",
    features: ["Annual 50-Point Inspection", "Water Pressure Testing", "Valve Lubrication & Test", "15% Member Discount"]
  }
];

export const STEPS_DATA: StepItem[] = [
  {
    stepNumber: "01",
    title: "Call Us",
    description: "Contact HydroFix Plumbing for immediate assistance or to schedule an appointment.",
    iconName: "phone-call"
  },
  {
    stepNumber: "02",
    title: "Quick Response",
    description: "Our team arrives promptly to assess your plumbing issue and provide a solution.",
    iconName: "clock"
  },
  {
    stepNumber: "03",
    title: "Expert Service",
    description: "We fix the problem efficiently using quality materials and proven techniques.",
    iconName: "wrench"
  },
  {
    stepNumber: "04",
    title: "Your Satisfaction",
    description: "We ensure everything works perfectly and you're completely satisfied with our work.",
    iconName: "check-circle"
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    quote: "HydroFix came out on a Sunday and fixed our burst pipe in under an hour. Professional, friendly, and fair pricing. Highly recommend!",
    author: "Sarah Johnson",
    location: "Downtown",
    rating: 5,
    avatarUrl: "/images/customer_sarah.png"
  },
  {
    id: "t2",
    quote: "We needed a complete tankless water heater installation. The team was prompt, ultra-clean, and walked us through every feature. Outstanding craftsmanship!",
    author: "Michael Ramirez",
    location: "Oakridge Estate",
    rating: 5,
    avatarUrl: "/images/customer_michael.png"
  },
  {
    id: "t3",
    quote: "Had a chronic kitchen drain clog that three other plumbers couldn't clear. HydroFix brought out their hydro-jet machine and solved it permanently. 10/10 service!",
    author: "Elena Rostova",
    location: "Westside Heights",
    rating: 5,
    avatarUrl: "/images/customer_elena.png"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "How quickly can you respond to emergency calls?",
    answer: "We pride ourselves on fast response times. Most emergency calls are answered within 30 minutes to 1 hour, depending on your location and our current workload. We're available 24/7, including weekends and holidays."
  },
  {
    id: "faq-2",
    question: "Do you offer emergency service on weekends and holidays?",
    answer: "Yes, absolutely! HydroFix operates 24 hours a day, 365 days a year. Our emergency dispatch team is always on standby for burst pipes, gas line issues, and major overflows."
  },
  {
    id: "faq-3",
    question: "Are your plumbers licensed and insured?",
    answer: "All HydroFix plumbers are fully licensed master/journeyman plumbers, background-checked, drug-tested, and covered under our $2,000,000 comprehensive liability insurance policy."
  },
  {
    id: "faq-4",
    question: "What areas do you serve?",
    answer: "We provide comprehensive residential and commercial plumbing services across the entire metro area, including Downtown, Mirpur, Oakridge, Westside, and surrounding suburban regions."
  },
  {
    id: "faq-5",
    question: "Do you offer maintenance plans?",
    answer: "Yes! Our HydroCare Annual Maintenance Plan includes annual 50-point plumbing inspections, priority dispatching, 15% discount on all repairs, and zero emergency service call fees."
  },
  {
    id: "faq-6",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), debit cards, cash, checks, and offer flexible 0% APR financing options for major plumbing installations."
  }
];
