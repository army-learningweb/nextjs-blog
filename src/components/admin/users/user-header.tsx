"use client";

import TitlePage from "../layouts/TitlePage";
import { Button } from "@/components/ui/button";
import { useDialog } from "@/context/DialogContext";

export default function UserHeader() {
  const { setOpenDialog } = useDialog();

  return (
    <div className="flex justify-between">
      <TitlePage title="Thành viên" />
      <div className="flex gap-2 items-center">
        <div className="bg-gray-100 rounded-md py-1 px-3 font-medium">
          Ctrl + K
        </div>
        <Button onClick={() => setOpenDialog(true)}>+ Thêm mới</Button>
      </div>
    </div>
  );
}
