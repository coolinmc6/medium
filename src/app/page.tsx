import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoVercel } from "react-icons/io5";
import Link from "next/link";
import Tile from "@/app/components/home-page/Tile"

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 p-2">
      <Tile className="relative">
        <Tile.Title>
          Welcome to My Portfolio
        </Tile.Title>
        <Tile.Body className="mb-4">
          This is the home for all the code and projects featured in my Medium articles.
          Thank you for visiting, and I hope you find something helpful!
        </Tile.Body>
        <Tile.Body className="mt-10">
          <Link href="https://github.com/coolinmc6/medium" className="flex gap-2 align-middle mb-4">
            <FaSquareGithub className="text-4xl" />
            <span className="text-lg pt-1">coolinmc6/medium (this repo)</span>
          </Link>
          <Link href="https://medium-one-alpha.vercel.app/" className="flex gap-2 align-middle">
            <IoLogoVercel className="text-4xl"/>
            <span className="text-lg pt-1">Live Demo on Vercel</span>
          </Link>
        </Tile.Body>
      </Tile>
      <Tile className="relative">
        <Tile.Title>A Practical Guide to useContext and useReducer in React and TypeScript</Tile.Title>
        <Tile.Body>Build a type-safe React game using useContext and useReducer with TypeScript.</Tile.Body>
        <Tile.Body className="mt-2">
          <Link href="https://medium.com/@coolinmc6/a-practical-guide-to-usecontext-and-usereducer-in-react-and-typescript-303ee3fc0423" className="text-lg underline">
            See the article
          </Link>
        </Tile.Body>
        <Tile.Body className="m2-2">
          <Link href="https://github.com/coolinmc6/medium/tree/article-001-context-integration-end" className="text-lg underline">
            See the code
          </Link>
        </Tile.Body>
        <Tile.Body className="m2-2">
          <Link href="/article-001-game" className="text-lg underline">
            See the final product
          </Link>
        </Tile.Body>
      </Tile>
    </div>
  );
}

