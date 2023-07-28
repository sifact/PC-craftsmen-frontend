import RootLayout from "@/components/Layouts/RootLayout";

export default function Home() {
  return (
    <>
      <h1 className="text-rose-300">hello there...</h1>
    </>
  );
}
Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
