import { EmailIcon, LocationIcon, PhoneIcon } from "../Theme/Icons/Icons";

export const navBarItems = [
  { id: "products", value: "Products", isClicked: false },
  { id: "about-us", value: "About Us", isClicked: false, offset: -100 },
  { id: "contact-us", value: "Contact Us", isClicked: false, offset: -100 },
  { id: "faq", value: "FAQ's", isClicked: false, offset: -100 },
];

export const signInButtons = [
  { id: "log-in", value: "Log In", isRing: false },
  { id: "sign-up", value: "Sign Up", isRing: true },
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
    value: "Email",
    icon: <EmailIcon fill="black" />,
  },
  {
    key: "phone-no",
    value: "Phone Number",
    icon: <PhoneIcon fill="black" />,
  },
  {
    key: "message",
    value: "How can I help you?",
  },
];
