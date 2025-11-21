import Link from 'next/link';
import { FaSnowflake, FaArrowRight } from 'react-icons/fa';

export default function AdventOfCode() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <FaSnowflake className="text-6xl text-blue-500 mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Advent of Code
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            My solutions to the annual Advent of Code programming challenges
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Available Years
          </h2>

          <div className="space-y-4">
            <Link
              className="flex items-center justify-between p-6 bg-linear-to-r from-green-500 to-red-600 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              href="/advent-of-code/2025"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  2025 Challenges
                </h3>
                <p className="text-green-100">Coming soon - December 2025</p>
              </div>
              <FaArrowRight className="text-3xl text-white group-hover:translate-x-2 transition-transform" />
            </Link>

            <Link
              className="flex items-center justify-between p-6 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              href="/advent-of-code/2024"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  2024 Challenges
                </h3>
                <p className="text-blue-100">
                  View all my solutions for Advent of Code 2024
                </p>
              </div>
              <FaArrowRight className="text-3xl text-white group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
