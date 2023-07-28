import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const gpu = () => {
  return <div>gpu</div>;
};

export default gpu;
gpu.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
