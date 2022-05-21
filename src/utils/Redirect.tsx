import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  let navigate = useNavigate();
  useEffect(() => {
    navigate("/Introduccion");
  }, [navigate]);
  return <></>;
};

export default Redirect;
