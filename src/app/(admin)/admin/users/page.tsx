"use client";

import { useEffect, useRef, useState } from "react";
import { Ellipsis, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import SectionPage from "@/components/admin/layouts/SectionPage";
import TitlePage from "@/components/admin/layouts/TitlePage";
import Dialog from "@/components/ui/dialog";

export default function Page() {
  const [openDialog, setOpenDialog] = useState(false);

  // Phím tắt mở Modal , Đóng Modal
  useEffect(() => {
    const keyEvent = (e: KeyboardEvent) => {
      e.preventDefault();

      if (e.ctrlKey && e.key == "k") {
        setOpenDialog(true);
      }

      if (e.key == "Escape") {
        setOpenDialog(false);
      }
    };

    window.addEventListener("keydown", keyEvent);
    return () => window.removeEventListener("keydown", keyEvent);
  }, [openDialog]);

  //  Tự động Focus
  const ipRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (ipRef.current) {
      ipRef.current.focus();
    }
  }, [openDialog]);

  return (
    <>
      <SectionPage>
        <Dialog
          openDialog={openDialog}
          onClose={() => setOpenDialog(false)}
          title="Thêm mới thành viên"
          desc="Điền đầy đủ thông tin bên dưới, nhấp thêm mới để thêm thành viên."
        >
          <form action="" className="space-y-2">
            <Field>
              <FieldLabel htmlFor="fullname">Họ tên</FieldLabel>
              <Input
                ref={ipRef}
                placeholder="Nguyễn Văn A"
                name="fullname"
                id="fullname"
                autoComplete="off"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                placeholder="example@gmail.com"
                name="email"
                id="email"
                autoComplete="off"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="password">Mật khẩu</FieldLabel>
              <Input name="password" id="password" autoComplete="off" />
            </Field>

            <Field>
              <FieldLabel htmlFor="re-password">Xác nhận mật khẩu</FieldLabel>
              <Input name="re-password" id="re-password" autoComplete="off" />
            </Field>
          </form>
        </Dialog>

        <div className="flex justify-between">
          <TitlePage title="Thành viên" />
          <div className="flex gap-2 items-center">
            <div className="bg-gray-100 rounded-md py-1 px-3 font-medium">Ctrl + K</div>
            <Button onClick={() => setOpenDialog(!openDialog)}>
              + Thêm mới
            </Button>
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 font-medium">
              <td className="p-2">Avatar</td>
              <td className="py-2">Họ tên</td>
              <td className="py-2">Email</td>
              <td className="py-2">Số điện thoại</td>
              <td className="p-2">Hiệu chỉnh</td>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-gray-100 hover:bg-gray-100">
              <td className="p-2">
                <div className="w-9 h-9 bg-black text-gray-200 rounded-lg flex items-center justify-center font-semibold">
                  LV
                </div>
              </td>
              <td className="py-2">Lưu Đức Vỹ</td>
              <td className="py-2">luuvy@gmail.com</td>
              <td className="py-2">0782199911</td>
              <td className="py-2">
                <div className="flex gap-2">
                  <Button variant="outline">
                    <Ellipsis />
                  </Button>

                  <Button variant="outline">
                    <Trash />
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr className="border-b border-gray-100 font-medium">
              <td className="p-2">Avatar</td>
              <td className="py-2">Họ tên</td>
              <td className="py-2">Email</td>
              <td className="py-2">Số điện thoại</td>
              <td className="p-2">Hiệu chỉnh</td>
            </tr>
          </tfoot>
        </table>
      </SectionPage>
    </>
  );
}
