import { Coffee, Contact, Home, User } from "lucide-react";
import { Menu } from "../types";

export const MENU: Menu[] = [
  {
    label: 'Home',
    href: '/',
    icon: Home
  },
  {
    label: 'Project',
    href: '/project',
    icon: Coffee
  },
  {
    label: 'About',
    href: '/about',
    icon: User
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: Contact
  },
  
]