import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const powerSupplyUnit = () => {
  return <div>powerSupplyUnit</div>;
};

export default powerSupplyUnit;

powerSupplyUnit.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
