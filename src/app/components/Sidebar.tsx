'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaHome,
  FaBars,
  FaTimes,
  FaSnowflake,
  FaPuzzlePiece,
  FaChevronDown,
  FaChevronRight,
} from 'react-icons/fa';
import { FaMedium, FaSquareGithub } from 'react-icons/fa6';
import { IoLogoVercel } from 'react-icons/io5';
import clsx from 'clsx';
import { portfolioTiles } from '@/app/util/constants';

type NavItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: NavItem[];
  badge?: {
    type: 'info' | 'success' | 'warning' | 'error';
    text: string;
  };
};

const navigationItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: <FaHome />,
  },
  {
    label: 'Articles & Projects',
    href: '#',
    icon: <FaMedium />,
    children: [
      {
        label: 'useContext & useReducer',
        href: '/article-001-game',
      },
    ],
  },
  {
    label: 'Advent of Code',
    href: '/advent-of-code',
    icon: <FaSnowflake />,
    children: [
      {
        label: '2025 Challenges',
        href: '/advent-of-code/2025',
        badge: {
          type: 'info',
          text: 'New',
        },
      },
      {
        label: '2024 Challenges',
        href: '/advent-of-code/2024',
      },
    ],
  },
  {
    label: 'Other Projects',
    href: '#',
    icon: <FaPuzzlePiece />,
    children: [
      {
        label: "Prisoner's Riddle",
        href: '/prisoners-riddle',
      },
      {
        label: 'Tango Solver',
        href: '/tango/solver',
      },
    ],
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([
    'Advent of Code',
  ]);
  const pathname = usePathname();

  const toggleSection = (label: string) => {
    setExpandedSections((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const NavLink = ({ item, depth = 0 }: { item: NavItem; depth?: number }) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedSections.includes(item.label);
    const active = isActive(item.href);

    if (hasChildren) {
      return (
        <div>
          <button
            className={clsx(
              'w-full flex items-center justify-between px-4 py-3 text-left transition-colors',
              'hover:bg-gray-100 dark:hover:bg-gray-700',
              depth > 0 && 'pl-8'
            )}
            onClick={() => toggleSection(item.label)}
          >
            <div className="flex items-center gap-3">
              {item.icon && (
                <span className="text-gray-600 dark:text-gray-400">
                  {item.icon}
                </span>
              )}
              <span className="font-medium text-gray-900 dark:text-white">
                {item.label}
              </span>
            </div>
            {isExpanded ? (
              <FaChevronDown className="text-gray-500 dark:text-gray-400" />
            ) : (
              <FaChevronRight className="text-gray-500 dark:text-gray-400" />
            )}
          </button>
          {isExpanded && (
            <div className="bg-gray-50 dark:bg-gray-800/50">
              {item.children?.map((child) => (
                <NavLink key={child.href} depth={depth + 1} item={child} />
              ))}
            </div>
          )}
        </div>
      );
    }

    const getBadgeClasses = (type: string) => {
      switch (type) {
        case 'info':
          return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300';
        case 'success':
          return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300';
        case 'warning':
          return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300';
        case 'error':
          return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300';
        default:
          return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300';
      }
    };

    return (
      <Link
        className={clsx(
          'flex items-center gap-3 px-4 py-3 transition-colors',
          depth > 0 && 'pl-8',
          active
            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-r-4 border-blue-600'
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
        )}
        href={item.href}
        onClick={() => setIsOpen(false)}
      >
        {item.icon && (
          <span
            className={clsx(
              active
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-400'
            )}
          >
            {item.icon}
          </span>
        )}
        <span className="font-medium">{item.label}</span>
        {item.badge && (
          <span
            className={clsx(
              'ml-auto px-2 py-0.5 text-xs font-semibold rounded-full',
              getBadgeClasses(item.badge.type)
            )}
          >
            {item.badge.text}
          </span>
        )}
      </Link>
    );
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-gray-900 dark:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <button
          aria-label="Close sidebar"
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setIsOpen(false);
          }}
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          'fixed top-0 left-0 h-full bg-white dark:bg-gray-800 shadow-xl z-40 transition-transform duration-300',
          'w-72 overflow-y-auto',
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        {/* Sidebar Header */}
        <div className="p-1 border-b border-gray-200 dark:border-gray-700 ">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <img
              src="/assets/original-logo.png"
              alt="Colin's Code Portfolio"
              width={200}
              height={60}
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="py-4">
          {navigationItems.map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className="flex items-center justify-center gap-4">
            {portfolioTiles[0].links.map((link, index) => (
              <Link
                key={index}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
                title={link.text}
              >
                {link.href.includes('github.com') ? (
                  <FaSquareGithub className="text-3xl" />
                ) : (
                  <IoLogoVercel className="text-3xl" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
