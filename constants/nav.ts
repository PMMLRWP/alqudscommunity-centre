import { FaBookOpen, FaHome, FaUsers } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { MdEmail } from "react-icons/md";


type NavItem = {
  name: string;
  link: string;
  icon: IconType;
};

export const navItems: NavItem[] = [
  // { name: "Home", link: "/", icon: FaHome},
  { name: "Donations", link: "/programs/flagship-program", icon: FaBookOpen },
  { name: "Our Team", link: "/team", icon: FaUsers },
  { name: "Contact Us", link: "/contact", icon: MdEmail },
];

