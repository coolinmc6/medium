import React from 'react';
import { FaSquareGithub } from 'react-icons/fa6';
import { IoLogoVercel } from 'react-icons/io5';

type PortfolioTile = {
  title: string;
  body: string[];
  links: {
    href: string;
    text: string;
    icon?: React.ReactNode;
    className?: string;
  }[];
  visible: boolean;
};

const LINK_STYLES = {
  articleLink: 'text-lg underline mb-0',
};

const REPO_URL_BASE = 'https://github.com/coolinmc6/medium';
const PRODUCTION_URL = 'https://medium-one-alpha.vercel.app/';

export const generateGitHubUrl = (
  path: string,
  isDirectory = false,
  branch = 'main'
): string => {
  const type = isDirectory ? 'tree' : 'blob';
  return `${REPO_URL_BASE}/${type}/${branch}/${path}`;
};

export const generateProductionUrl = (path: string): string => {
  return `${PRODUCTION_URL}${path}`.replace(/\/+/g, '/');
};

export const portfolioTiles: PortfolioTile[] = [
  {
    title: 'Welcome to My Portfolio',
    body: [
      'This is the home for all the code and projects featured in my Medium articles. Thank you for visiting, and I hope you find something helpful!',
    ],
    links: [
      {
        href: REPO_URL_BASE,
        text: 'coolinmc6/medium (this repo)',
        icon: <FaSquareGithub className="text-4xl" />,
      },
      {
        href: PRODUCTION_URL,
        text: 'Live Demo on Vercel',
        icon: <IoLogoVercel className="text-4xl" />,
      },
    ],
    visible: true,
  },
  {
    title:
      'A Practical Guide to useContext and useReducer in React and TypeScript',
    body: [
      'Build a type-safe React game using useContext and useReducer with TypeScript.',
    ],
    links: [
      {
        href: 'https://medium.com/@coolinmc6/a-practical-guide-to-usecontext-and-usereducer-in-react-and-typescript-303ee3fc0423',
        text: 'See the article',
        className: LINK_STYLES.articleLink,
      },
      {
        href: 'https://github.com/coolinmc6/medium/tree/article-001-context-integration-end',
        text: 'See the code',
        className: LINK_STYLES.articleLink,
      },
      {
        href: '/article-001-game',
        text: 'See the final product',
        className: LINK_STYLES.articleLink,
      },
    ],
    visible: true,
  },
  {
    title: 'Advent of Code 2024: Project Setup and Day 1',
    body: [
      "Start the Advent of Code 2024 Challenges with a React-TypeScript project and tackle Day 1's challenges",
    ],
    visible: true,
    links: [
      {
        href: 'https://coolinmc6.medium.com/advent-of-code-2024-react-typescript-project-setup-and-day-1-solution-8761ad69a33e',
        text: 'See the article',
        className: LINK_STYLES.articleLink,
      },
      {
        href: generateGitHubUrl('src/app/advent-of-code/2024/AOC2024Day01.tsx'),
        text: 'See the code',
        className: LINK_STYLES.articleLink,
      },
      {
        href: 'advent-of-code/2024',
        text: 'See the final product',
        className: LINK_STYLES.articleLink,
      },
    ],
  },
  {
    title: 'Advent of Code 2024: Day 2',
    body: ['Day 2 challenges'],
    visible: true,
    links: [
      {
        href: 'https://coolinmc6.medium.com/advent-of-code-2024-day-2-026d4d6f55f1',
        text: 'See the article',
        className: LINK_STYLES.articleLink,
      },
      {
        href: generateGitHubUrl('src/app/advent-of-code/2024/AOC2024Day02.tsx'),
        text: 'See the code',
        className: LINK_STYLES.articleLink,
      },
      {
        href: 'advent-of-code/2024',
        text: 'See the final product',
        className: LINK_STYLES.articleLink,
      },
    ],
  },
  {
    title: 'Advent of Code 2024: Day 3',
    body: ['Day 3 challenges'],
    visible: true,
    links: [
      {
        href: 'https://coolinmc6.medium.com/advent-of-code-2024-day-3-b2ab1851c496',
        text: 'See the article',
        className: LINK_STYLES.articleLink,
      },
      {
        href: generateGitHubUrl('src/app/advent-of-code/2024/AOC2024Day03.tsx'),
        text: 'See the code',
        className: LINK_STYLES.articleLink,
      },
      {
        href: 'advent-of-code/2024',
        text: 'See the final product',
        className: LINK_STYLES.articleLink,
      },
    ],
  },
];
