import {
  Arrow,
  BoyBoxIcon,
  BoyIcon,
  Cost,
  Door,
  Enjoy,
  Guard,
  Month,
  Ship,
  TruckIcon,
  TruckIcon2,
} from "./Icon";

export const logisticCards = [
  {
    name: "Full truck load",
    truck: <TruckIcon />,
    man: <BoyIcon />,
    img: <Arrow />,
  },
  {
    name: "Monthly dedicated vehicle ",
    truck: <Month />,
    man: <Guard />,
    img: <Arrow />,
  },
];
export const logisticCards2 = [
  {
    name: "Part load",
    truck: <TruckIcon2 />,
    man: <BoyBoxIcon />,
    img: <Arrow />,
  },
  {
    name: "Monthly dedicated vehicle ",
    truck: <Month />,
    man: <Guard />,
    img: <Arrow />,
  },
];
export const logisticCards3 = [
  {
    name: "Full truck load",
    truck: <TruckIcon />,
    man: <BoyIcon />,
    img: <Arrow />,
  },
  {
    name: "Part load ",
    truck: <TruckIcon2 />,
    man: <BoyBoxIcon />,
    img: <Arrow />,
  },
];

export const choose_card = [
  {
    name: "Experience door-to-door service for smaller weights as well",
    p: "Enjoy on-demand pickup & delivery services at your doorstep",
    icon: <Door />,
  },
  {
    name: "Ship your load from 100 kg onwards",
    p: "Get your documents, laptops, lunch boxes, forgotten keys or other small packages picked up and delivered instantly",
    icon: <Ship />,
  },
  {
    name: "Most cost-effective option",
    p: "Be it a pen or multiple documents, send anything up to 20 kg anywhere across the city",
    icon: <Cost />,
  },
  {
    name: "Enjoy seamless service for part loads across cities",
    p: "Book two-wheeler delivery services online and get same-day delivery",
    icon: <Enjoy />,
  },
];

export const choose_card2 = [
  {
    name: "Cost effective solution",
    p: "Enjoy on-demand pickup & delivery services at your doorstep",
    icon: <Door />,
  },
  {
    name: "Customize and Flexibles solutions according to your need",
    p: "Enjoy on-demand pickup & delivery services at your doorstep",
    icon: <Ship />,
  },
  {
    name: "Reliable and seamless service with complete ownership",
    p: "Enjoy on-demand pickup & delivery services at your doorstep",
    icon: <Cost />,
  },
  {
    name: "Book our services from anywhere andanytime",
    p: "Enjoy on-demand pickup & delivery services at your doorstep",
    icon: <Enjoy />,
  },
];

export const choose_card3 = [
  {
    name: "Transparent pricing",
    p: "Enjoy on-demand pickup & delivery services at your doorstep",
    icon: <Door />,
  },
  {
    name: "Professional support for your daily route planning",
    p: "Enjoy on-demand pickup & delivery services at your doorstep",
    icon: <Ship />,
  },
  {
    name: "Complete ownership of product during transit with temperature management",
    p: "Enjoy on-demand pickup & delivery services at your doorstep",
    icon: <Cost />,
  },
  {
    name: "Customize the solution as per your needs",
    p: "Enjoy on-demand pickup & delivery services at your doorstep",
    icon: <Enjoy />,
  },
];

export const inputform = [
  { type: "text", placeholder: "Name  * " },
  { type: "number", placeholder: "Contact number * " },
];

export const inputcontact = [
  { type: "text", placeholder: "Name  * " },
  { type: "email", placeholder: "Email *" },
  { type: "number", placeholder: "Phone number * " },
];

export const tick = [
  {
    span: "One point",
    p: "access to refrigerated vehicles, cold storages nationwide or any customization requirement.",
  },
  {
    span: "Flexible Solutions ",
    p: "Offering both part-load and full-load options for inter-city and intra-city transportation.",
  },
  {
    span: "Transparent Pricing",
    p: " Standard rates throughout the year with no hidden costs.",
  },
  {
    span: "Reliability",
    p: " Upholding commitments with professionalism and efficiency.",
  },
  {
    span: "Customer-Centric Approach",
    p: "  Focused on continuously elevating service standards based on customer feedback and demands.",
  },
  {
    span: "Cost-Effective",
    p: " Delivering cost-saving solutions without compromising on quality.",
  },
  {
    span: "Integrated Supply Chain",
    p: " Consolidating quantity, quality, and delivery under one roof for enhanced coordination.",
  },
  {
    span: "Visibility and Quality Assurance",
    p: " Providing visibility and guarantee on both quantity and quality.",
  },
  {
    span: "Localized Services ",
    p: "Partnering with cold storages across India to provide proximity-based solutions.",
  },
];

export const About = [{ p: "About Us" }, { p: "Why Us" }, { p: "Services" }];

export const mail = [
  { imga: "/img/mail.png", p: "sales@frizit.in" },
  { imga: "/img/footermobile.png", p: "+91 98189 60594" },
  {
    imga: "/img/footerlocation.png",
    p: " 360, Sector 28, Gurugram, 122002",
  },
];

export const Features = [
  {
    icon: "/img/dairy.png",
    title: "Dairy",
  },
  {
    icon: "/img/Fruits.png",
    title: "Fruits",
  },
  {
    icon: "/img/ice-cream.png",
    title: "Ice-creams",
  },
  {
    icon: "/img/Frozen food.png",
    title: "Frozen foods",
  },
  {
    icon: "/img/vegtable.png",
    title: "Vegetables",
  },
  {
    icon: "/img/Pharma.png",
    title: "Pharma",
  },
];

import {
  BookstackIcon,
  BoxIcon,
  BoxMan,
  BoxstackIcon,
  IntegIcon,
  KgIcon,
  LogIcon,
  NoteIcon,
  NoteMan,
  StockIcon,
  StorageIcon,
  TrollyIcon,
  TrollyMan,
} from "./Icon";
export const serviceData = [
  {
    text1: "Logistics",
    text2: "(Reefer vehicle)",
    svg: <LogIcon />,
  },
  {
    text1: "Storage",
    text2: "(Cold storage)",
    svg: <StorageIcon />,
  },
  {
    text1: "Integrated",
    text2: "(Procure, store and distribute)",
    svg: <IntegIcon />,
  },
];

export const serviceData2 = [
  {
    text: "Part load",
    img: "/img/boxman.png",
    width: 68,
    hight: 120,
    svg: <BoxIcon />,
    svg2: <BoxMan />,
    url: "/part-load",
  },
  {
    text: "Full truck load ",
    img: "/img/trollyman.png",
    width: 120,
    hight: 120,
    svg: <TrollyIcon />,
    svg2: <TrollyMan />,
    url: "/full-truck-load",
  },
  {
    text: "Monthly dedicated vehicle ",
    img: "/img/noteman.png",
    width: 150,
    hight: 20,
    svg: <NoteIcon />,
    svg2: <NoteMan />,
    url: "/monthly-dedicated-vehicle",
  },
];
export const serviceData3 = [
  {
    text: "Book in Pallets",
    svg: <BookstackIcon />,
    svg2: <StockIcon />,
  },
  {
    text: "Book in kgs",
    img: "/img/trollyman.png",
    width: 120,
    hight: 120,
    svg: <KgIcon />,
    svg2: <BoxstackIcon />,
  },
];

export const Ourservices = [
  {
    img: "/img/refer-transport.png",
    title: " Part load",
    description:
      "Don't have enough cargo to rent an entire vehicle but want to expand your business nationwide? No problem! Rent any load with us and we'll handle the transportation for you.",
  },
  {
    img: "/img/fulltruck.png",
    title: "Full truck load",
    description:
      "Discover our hassle-free vehicle booking service across India, tailored to fit your budgetperfectly.",
  },
  {
    img: "/img/monthly.png",
    title: "Monthly dedicated vehicle",
    description:
      "If you're looking to rent a vehicle and operate it yourself, let us know! We'll arrange for a vehicle nearyour location to suit your needs.",
  },
];

export const Ourservices2 = [
  {
    img: "/img/bookpallets.png",
    title: " Book in pallets",
    description:
      "book your space according to traditional cold chain standards.",
  },
  {
    img: "/img/bookkgs.png",
    title: "Book in kgs",
    description:
      "Move away from traditional standards and simplify your process by storing goods directly in your production unit, measured in kilograms (Kg), and pay accordingly.",
  },
];

export const Ourservices3 = [
  {
    img: "/img/weprocure.png",
    title: "We Procure on your behalf.",
  },
  {
    img: "/img/westore.png",
    title: "We Store on your behalf.",
  },
  {
    img: "/img/wedeliver.png",
    title: "We Deliver to your clients on your behalf.",
  },
  {
    img: "/img/dailyroute.png",
    title: "Daily Route planning.",
  },
  {
    img: "/img/everything.png",
    title: "Everything processed online with 100% visibility.",
  },
  {
    img: "/img/noworry.png",
    title: "No worry of minimum order quantity.",
  },
];
