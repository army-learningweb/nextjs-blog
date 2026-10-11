import SideNav from "../navigations/SideNav";

type AdminLayoutProps = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-50 text-[14px]">
      <div className="w-[15%] pl-4 py-6">
        <SideNav />
      </div>

      <div className="flex-1 p-4">
        <div className="p-4 bg-white rounded-2xl h-full shadow">{children}</div>
      </div>
    </div>
  );
}
