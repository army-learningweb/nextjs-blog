import AdminLayout from "@/components/admin/layouts/AdminLayout";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <AdminLayout>{children}</AdminLayout>;
}
