"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const toggleMenu = (): void => setIsMenuOpen((prev) => !prev);
  const closeMenu = (): void => setIsMenuOpen(false);
  const toggleCart = (): void => setIsCartOpen((prev) => !prev);

  const menuItems: { href: string; label: string }[] = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="bg-[#FFFFFF] shadow-md box-border sticky top-0 z-50">
      <div className="flex items-center gap-40 justify-between px-4 md:mx-14 py-5">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Link href="/" onClick={closeMenu}>
            <Image
              width={50}
              height={33}
              src="/images/logo.png"
              alt="Furniro Logo"
              className="w-8 md:w-10"
            />
          </Link>
          <h1 className="text-2xl md:text-4xl font-bold font-montserrat">
            <Link href="/" onClick={closeMenu}>
              Furniro
            </Link>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center flex-1">
          <ul className="flex gap-6 md:gap-20 font-poppins text-sm md:text-[18px] font-medium items-center">
            {menuItems.map((item) => (
              <li key={item.href} className="cursor-pointer">
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 md:gap-12">
            <Link href="/contact">
              <Image
                width={24}
                height={20}
                src="/images/icons/help.png"
                alt="Help Icon"
                className="w-5 md:w-6"
              />
            </Link>
            <button type="button" aria-label="Search">
              <Image
                width={25}
                height={25}
                src="/images/icons/search.png"
                alt="Search Icon"
                className="w-5 md:w-6"
              />
            </button>
            <button type="button" aria-label="Wishlist">
              <Image
                width={26}
                height={24}
                src="/images/icons/like.png"
                alt="Wishlist Icon"
                className="w-5 md:w-6"
              />
            </button>
            <button
              type="button"
              onClick={toggleCart}
              aria-label="Toggle Cart"
            >
              <Image
                width={26}
                height={23}
                src="/images/icons/cart1.png"
                alt="Cart Icon"
                className="w-5 md:w-6"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="menu-toggle"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="block md:hidden focus:outline-none transition-all ease-in-out"
        >
          <Image
            width={512}
            height={512}
            src="/images/icons/hamburger.png"
            alt="Menu Icon"
            className="w-6"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50 transition-all ease-in-out">
          <ul className="flex flex-col items-center gap-4 py-4 font-poppins text-sm font-medium">
            {menuItems.map((item) => (
              <li
                key={item.href}
                className="cursor-pointer"
                onClick={closeMenu}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 z-60">
          <div className="absolute top-0 right-0 bg-white w-4/5 md:w-1/3 rounded-lg shadow-lg p-4">
            <button
              onClick={toggleCart}
              className="absolute top-2 right-2 text-xl font-bold text-gray-500"
            >
              ✖
            </button>
            <h3 className="text-xl font-bold mb-4">Shopping Cart</h3>
            <div className="space-y-4">
              {/* Cart items can be dynamically rendered here */}
              <div>Cart Items Placeholder</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;