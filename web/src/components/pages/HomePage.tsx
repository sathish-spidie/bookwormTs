import React from "react";
import { Link } from "react-router-dom";

export interface IHomePageProps {}

const HomePage: React.FC<IHomePageProps> = (props): React.ReactElement => {
  return (
    <div>
      <h1>HomePage </h1>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default HomePage;
