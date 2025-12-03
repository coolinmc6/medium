import React from 'react';
import Link from 'next/link';
import { portfolioTiles } from '@/app/util/constants';
import { FaSquareGithub, FaMedium } from 'react-icons/fa6';
import { IoLogoVercel } from 'react-icons/io5';

export default function Home() {
  const welcomeTile = portfolioTiles.find(
    (tile) => tile.title === 'Welcome to My Portfolio'
  );
  const articleTiles = portfolioTiles.filter(
    (tile) => tile.visible && tile.title !== 'Welcome to My Portfolio'
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Code & Articles
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            {welcomeTile?.body[0]}
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            {welcomeTile?.links.map((link, index) => (
              <Link
                key={index}
                className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-gray-900 dark:text-white"
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.icon}
                <span className="font-medium">{link.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Featured Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articleTiles.map((tile, index) => (
            <article
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col"
            >
              {/* Card Header */}
              <div className="bg-linear-to-r from-blue-500 to-purple-600 h-2"></div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 line-clamp-3">
                  {tile.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1">
                  {tile.body.join(' ')}
                </p>

                {/* Links */}
                <div className="space-y-3 mt-auto">
                  {tile.links.map((link, linkIndex) => {
                    const isMediumArticle = link.href.includes('medium.com');
                    const isGitHub = link.href.includes('github.com');
                    const isInternal = link.href.startsWith('/');

                    return (
                      <Link
                        key={linkIndex}
                        className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors group"
                        href={link.href}
                        rel={isInternal ? undefined : 'noopener noreferrer'}
                        target={isInternal ? undefined : '_blank'}
                      >
                        {isMediumArticle && (
                          <FaMedium className="text-xl group-hover:scale-110 transition-transform" />
                        )}
                        {isGitHub && (
                          <FaSquareGithub className="text-xl group-hover:scale-110 transition-transform" />
                        )}
                        {isInternal && (
                          <IoLogoVercel className="text-xl group-hover:scale-110 transition-transform" />
                        )}
                        <span className="font-medium group-hover:underline">
                          {link.text}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
