import React, { useContext } from "react";
import { Link } from "react-router-dom";

import LogoSVG from "../../components/Logo";
import { CatalogContext } from "../../context/CatalogContext";

import "./styles.css";

function Layout({ children }: { children: React.ReactNode }) {
  const catalogCtx = useContext(CatalogContext);
  const { catalog } = catalogCtx;

  // header nav and footer semantic html
  return (
    <div className="flex flex-col">
      <header className="flex md:flex-row flex-col justify-between py-4 md:mb-12">
        <div className="flex flex-row justify-center md:justify-start">
          <LogoSVG width="40px" />
          <span className="text-xl ml-4 flex items-center">
            Tickets by Alex™
          </span>
        </div>
        <nav className="flex md:flex-row flex-col my-4">
          {catalog.map((band: any, i: number) => (
            <li
              key={i}
              className="flex items-center md:mr-6 my-2 hover:underline justify-center md:justify-end text-sky-700 hover:text-sky-600"
            >
              <Link to={`/${band.id}`}>{band.name}</Link>
            </li>
          ))}
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <span className="text-xl mt-12 mb-8 flex items-center">Copyright 2023</span>
      </footer>
    </div>
  );
}

export default Layout;
