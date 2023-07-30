import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const storageDevice = () => {
  return <div>storageDevice</div>;
};

export default storageDevice;
storageDevice.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
