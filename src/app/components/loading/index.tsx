import React from "react";

import "./style.css";

const Loading = () => {
  return (
    <div className=" w-full flex items-center justify-center sm:min-h-screen sm:mt-0 mt-8">
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
    </div>
  );

};

export default Loading;
