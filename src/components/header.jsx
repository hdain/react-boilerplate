import { Link, useNavigate } from 'react-router-dom';

import useIsMobile from '../hooks/use-is-mobile.js';

const NavTabList = [
  {
    title: 'Section 1',
    href: '#',
  },
  {
    title: 'Section 2',
    href: '#',
  },
  {
    title: 'Section 3',
    href: '#',
  },
  {
    title: 'Section 4',
    href: '#',
  },
];

export default function Header() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleLogoClick = () => {
    if (isMobile) {
      navigate(0);
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-30 flex border-b">
      <div
        className="flex h-50 w-full justify-center transition-all duration-300 lg:h-80
      lg:justify-between lg:bg-black lg:px-34 lg:opacity-70 lg:shadow-[0px_5px_10px_#000000CC]"
      >
        <h1
          className="flex cursor-pointer items-center justify-center text-black lg:text-white"
          onClick={handleLogoClick}
        >
          Logo
        </h1>
        <nav className="hidden h-full gap-36 pr-6 lg:flex">
          {NavTabList.map(({ title, href }) => (
            <Link
              to={href}
              className="flex h-full cursor-pointer items-center text-white"
              key={title}
            >
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
