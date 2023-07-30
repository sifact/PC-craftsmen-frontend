import React from "react";

const mouse = () => {
  return <div>mouse</div>;
};

export default mouse;

mouse.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
