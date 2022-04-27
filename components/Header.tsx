import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiSun, HiMoon } from 'react-icons/hi';

type NavLinkProps = {
  page: string;
};

type HeaderProps = {
  active: boolean;
  setActive: any;
};

const pages = ['About', 'Projects', 'Contact', 'Blog'];

const NavLink = ({ page }: NavLinkProps) => {
  const link = '/' + page;

  return (
    <li className="hover:opacity-75 font-medium" key={page}>
      <Link href={link} passHref>
        {page}
      </Link>
    </li>
  );
};

const Header = ({ active, setActive }: HeaderProps) => {
  const { systemTheme, theme, setTheme } = useTheme();

  const handleActive = () => {
    setActive(!active);
  };

  const renderThemeSwitch = () => {
    return (
      <label className="group relative flex cursor-pointer items-center justify-between p-2 text-xl">
        <HiSun className="h-8 w-10 text-yellow-500 " />
        <input
          type="checkbox"
          className="peer hidden h-full  -translate-x-1/2 rounded-md"
          checked={theme === 'dark'}
          onChange={() => {
            console.log(theme);
            theme === 'dark' ? setTheme('light') : setTheme('dark');
          }}
        />
        <span className="mx flex h-6 w-12 flex-shrink-0 items-center rounded-full bg-gray-300 p-1 duration-300 ease-in-out after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow-md after:duration-300 group-hover:after:translate-x-1 peer-checked:bg-gray-600 peer-checked:after:translate-x-6"></span>
        <HiMoon className="mb-1 ml-1 h-8 w-10 text-black dark:text-white " />
      </label>
    );
  };

  return (
    <header>
      <nav className="flex items-center justify-between px-4 py-4 transition-all duration-300 md:px-10">
        <Link href="/" passHref>
          <div className="group flex cursor-pointer flex-row gap-2">
            <div className="logo" />
            <div className="my-[4px] border-r border-black dark:border-white" />
            <div>
              <h1 className="text-2xl font-bold leading-none">Scott Duller</h1>
              <span className="text-xs ">Web Developer</span>
            </div>
          </div>
        </Link>
        <ul className="hidden flex-grow justify-center gap-6 md:flex">
          {pages.map((page) => {
            return NavLink({ page });
          })}
        </ul>
        <div
          className={`z-40 cursor-pointer space-y-2 transition-all duration-300 ease-in-out md:hidden`}
          onClick={handleActive}
        >
          <span
            className={`${
              active &&
              'origin-bottom translate-x-[2px] translate-y-[4px] rotate-45'
            } ease-[cubic-bezier(0.68, -0.6, 0.32, 1.6)] block h-0.5 w-4 rounded-[10px] bg-black transition-transform duration-[400ms] dark:bg-white`}
          ></span>
          <span
            className={`${
              active && 'origin-top -rotate-45'
            } ease-[cubic-bezier(0.68, -0.6, 0.32, 1.6)] block h-0.5 w-8 rounded-[10px] bg-black transition-transform duration-[400ms] dark:bg-white`}
          ></span>
          <span
            className={`${
              active &&
              'origin-bottom translate-x-[6px] translate-y-[-8px] rotate-45'
            } ease-[cubic-bezier(0.68, -0.6, 0.32, 1.6)] block h-0.5 w-6 rounded-[10px] bg-black transition-transform duration-[400ms] dark:bg-white`}
          ></span>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li className="hover:opacity-75">
            <a href="https://www.facebook.com/S.O.Duller">
              <FaFacebookSquare size="1.75em" />
            </a>
          </li>
          <li className="hover:opacity-75">
            <a href="https://www.linkedin.com/in/scottduller/">
              <FaLinkedin size="1.75em" />
            </a>
          </li>
          <li className="hover:opacity-75">
            <a href="https://github.com/scottduller">
              <FaGithub size="1.75em" />
            </a>
          </li>
          <li>{renderThemeSwitch()}</li>
        </ul>
        <div
          className={`${
            active ? 'z-10 opacity-50' : '-z-10 opacity-0'
          } absolute inset-0 h-screen w-screen bg-black  transition-all duration-300 ease-out`}
          onClick={() => {
            setActive(false);
          }}
        />
        <aside
          className={`fixed top-0 right-0 z-30 flex h-screen w-screen transform flex-col items-center overflow-auto bg-white py-10 drop-shadow-xl transition duration-500 ease-in-out dark:bg-neutral-900 sm:w-96 ${
            active ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <Link href="/" passHref>
            <div className="group flex cursor-pointer flex-col gap-2">
              <div className="logo" />
              <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold leading-none">
                  Scott Duller
                </h1>
                <span className="text-xs">Web Developer</span>
              </div>
            </div>
          </Link>
          <ul className="mt-10 flex flex-grow flex-col items-center gap-8">
            {pages.map((page) => {
              return NavLink({ page });
            })}
          </ul>
          {renderThemeSwitch()}
        </aside>
      </nav>
    </header>
  );
};

export default Header;
