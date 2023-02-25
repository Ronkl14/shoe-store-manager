import React from "react";
import notFound from "../assets/img/pulp-fiction-john-travolta.gif";

const ErrorPage = () => {
  return (
    <div>
      <img src={notFound} alt="not found" />
    </div>
  );
};

export default ErrorPage;
