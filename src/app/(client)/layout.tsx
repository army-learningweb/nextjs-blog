import ClientLayout from "@/components/client/layouts/ClientLayout";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <ClientLayout>{children}</ClientLayout>;
}
