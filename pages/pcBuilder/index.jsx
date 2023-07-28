import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const PcBuilder = () => {
  return <div>PcBuilder</div>;
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
