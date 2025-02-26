import { Footer } from "@/components/layout/footer/footer";
import NavBar from "@/components/layout/navbar/navbar";

export default function WithNavLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
