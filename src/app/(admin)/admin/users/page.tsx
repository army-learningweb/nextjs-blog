import SectionPage from "@/components/admin/layouts/SectionPage";
import UserTable from "@/components/admin/users/user-table";
import UserDialog from "@/components/admin/users/user-dialog";
import UserHeader from "@/components/admin/users/user-header";
import { DialogProvider } from "@/context/DialogContext";
import { fetchUser, totalUser } from "@/lib/data";
import UserPagination from "@/components/admin/users/user-paginaton";

type PageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function Page({ searchParams }: PageProps) {
  // Dữ liệu trang từ Query Params
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;

  // Dữ liệu users
  const users = await fetchUser(currentPage);
  const total = await totalUser();

  return (
    <>
      <DialogProvider>
        <UserDialog />
        <SectionPage>
          <UserHeader />
          <UserTable users={users} />
          <UserPagination total={total} />
        </SectionPage>
      </DialogProvider>
    </>
  );
}
