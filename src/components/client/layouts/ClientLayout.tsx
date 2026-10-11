import Header from "@/components/client/layouts/header";
import Footer from "@/components/client/layouts/footer";
import { ScrollProvider } from "@/context/ScrollContext";

type ClientLayoutProps = {
  children: React.ReactNode;
};

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <ScrollProvider>
        <div className="wrapper max-w-7xl w-full mx-auto flex flex-col min-h-full text-[14px] mt-18">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </ScrollProvider>
    </>
  );
}
