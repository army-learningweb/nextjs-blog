"use client"

import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useDialog } from "@/context/DialogContext";

import Dialog from "@/components/ui/dialog";

export default function UserDialog() {
  // Trạng thái & Xử lí trạng thái dialog
  const { openDialog, setOpenDialog, ipRef } = useDialog();

  return (
    <>
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
    </>
  );
}
