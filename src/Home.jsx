import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <div className="home">
      <h1 className="homePage">HOME</h1>
      <nav>
        <ul>
          <li>
            <Link className="toCounter" to="/counter">
              COUNTER
            </Link>
          </li>
          <li>
            <Link className="toPage" to="/404">
              404 Page
            </Link>
          </li>
          <li>
            <Link className="toError" to="/test">
              Error Boundary Test
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
