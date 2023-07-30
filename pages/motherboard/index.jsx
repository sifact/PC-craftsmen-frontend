import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const motherboard = () => {
  return <div>motherboard</div>;
};

export default motherboard;
motherboard.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
