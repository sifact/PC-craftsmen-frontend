import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const monitor = () => {
  return <div>monitor</div>;
};

export default monitor;
monitor.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
