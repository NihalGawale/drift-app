import {
  CommunityMindestIcon,
  CustomerFirstIcon,
  EmailIcon,
  LocationIcon,
  PhoneIcon,
  TrustIcon,
} from "../Theme/Icons/Icons";

export const navBarItems = [
  { id: "products", value: "Products", isClicked: false },
  { id: "about-us", value: "About Us", isClicked: false, offset: -100 },
  { id: "contact-us", value: "Contact Us", isClicked: false, offset: -100 },
  { id: "faq", value: "FAQ's", isClicked: false, offset: -100 },
];

export const signInButtons = [
  { id: "log-in", value: "Log In", isRing: false },
  { id: "sign-up", value: "Be a Drifter", isRing: true },
];

export const contactLeftConstants = [
  {
    key: "location",
    icon: <LocationIcon />,
    title: "Office",
    description: "Visit us at our headquarters for personalized service.",
    contact:
      "Qtr no.28 Behind S B City College, Somwaripeth, Nagpur - 440024, Maharashta, India",
  },
  {
    key: "email",
    icon: <EmailIcon fill="white" />,
    title: "Email",
    description: "Reach us anytime for inquiries or support.",
    contact: "teamdriftwear@gmail.com",
  },
  {
    key: "phone",
    icon: <PhoneIcon fill="white" />,
    title: "Phone",
    description: "Call us for immediate assistance or questions.",
    contact: "+91 7219591231",
  },
];

export const contactRightConstants = [
  {
    key: "email",
    isRequired: true,
    value: "Email*",
    icon: <EmailIcon fill="black" />,
  },
  {
    key: "phoneNumber",
    isRequired: true,
    value: "Phone Number*",
    icon: <PhoneIcon fill="black" />,
  },
  {
    key: "message",
    isRequired: true,
    value: "How can I help you?*",
  },
];

export const coreValuesConst = [
  {
    id: "trust",
    icon: <TrustIcon />,
    title: "Trust",
    description: `We don’t take trust for granted — we earn it. From quality
                  craftsmanship to honest service, everything we do is built on
                  reliability and consistency.`,
  },
  {
    id: "customer-first",
    icon: <CustomerFirstIcon />,
    title: "Customers Come First",
    description: ` You’re not just buying sneakers — you’re joining a movement. We
                design with your comfort, style, and feedback in mind. Always.`,
  },
  {
    id: "community-mindset",
    icon: <CommunityMindestIcon />,
    title: "Community-First Mindset",
    description: `We move as one. Drift is more than a brand — it’s a shared space
                for creators, explorers, and everyday rebels who lift each other
                up.`,
  },
];
