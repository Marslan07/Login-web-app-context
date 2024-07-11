import React from "react";
import { LoadingOutlined } from "@ant-design/icons";

const FullPageLoader = () => {

  return (
    <div className="loading-box">
      <div className="loading-container">
      <LoadingOutlined style={{ fontSize: 48 }} spin />
      </div>
    </div>
  );
};

export default FullPageLoader;
