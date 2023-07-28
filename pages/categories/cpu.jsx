import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const cpu = () => {
  return <div>cpu</div>;
};

export default cpu;

cpu.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
