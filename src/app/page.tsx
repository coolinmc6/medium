import React from "react";

import Link from "next/link";
import Tile from "@/app/components/home-page/Tile";
import { portfolioTiles } from "@/app/util/constants";
import clsx from "clsx";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 p-2">
      {portfolioTiles.map((tile, index) => {
        if (tile.visible) {
          return (
            <Tile key={index} className="relative">
              <Tile.Title>{tile.title}</Tile.Title>
              {tile.body.map((body, index) => (
                <Tile.Body className="mb-4" key={index}>
                  {body}
                </Tile.Body>
              ))}
              <Tile.Body className="mt-10">
                {tile.links.map((link, index) => (
                  <Link
                    href={link.href}
                    className={clsx(
                      "flex gap-2 align-middle mb-4",
                      link.className
                    )}
                    key={index}
                  >
                    {link.icon ? link.icon : null}
                    <span className="text-lg pt-1">{link.text}</span>
                  </Link>
                ))}
              </Tile.Body>
            </Tile>
          );
        }
      })}
    </div>
  );
}
