'use client'
import {
  UserIcon,
  ChatBubbleLeftRightIcon,
  BriefcaseIcon,
  ArrowLeftStartOnRectangleIcon
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/professionals', icon: UserIcon },
  {
    name: 'Chat',
    href: '/professionals/chat',
    icon: ChatBubbleLeftRightIcon,
  },
  { name: 'Posts', href: '/professionals/posts', icon: BriefcaseIcon },
  { name: 'Logout', href: '/', icon: ArrowLeftStartOnRectangleIcon },
];

export default function NavLinks() {
  const pathName = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white
              ${pathName === link.href ? 'text-gray-800 bg-white ' : ''}
            `}
          >
            <LinkIcon className="w-6" />
            {/* <p className="hidden md:block">{link.name}</p> */}
          </Link>
        );
      })}
    </>
  );
}