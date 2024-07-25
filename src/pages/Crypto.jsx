import React from "react";
import Table from "../components/Table";
import Filter from "../components/Filter";
import { Outlet } from "react-router-dom";

const Crypto = () => {
  return (
    <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
      <Filter/>
      <Table/>
      <Outlet/>
    </section>
  );
};

export default Crypto;
