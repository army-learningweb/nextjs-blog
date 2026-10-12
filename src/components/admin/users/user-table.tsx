import { Button } from "@/components/ui/button";
import { Trash, Ellipsis } from "lucide-react";
import { Users } from "@/lib/definition";
import { userAvatar } from "@/lib/utils";

export default async function UserTable({ users }: { users: Users[] }) {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-gray-100 font-medium">
          <td className="p-2">Avatar</td>
          <td className="py-2">Họ tên</td>
          <td className="py-2">Email</td>
          <td className="py-2">Địa chỉ</td>
          <td className="py-2">Số điện thoại</td>
          <td className="p-2">Hiệu chỉnh</td>
        </tr>
      </thead>

      <tbody>
        {users.map((item) => (
          <tr
            key={item.id}
            className="border-b border-gray-100 hover:bg-gray-100"
          >
            <td className="p-2 w-30">
              <div className="w-9 h-9 bg-black text-gray-200 rounded-lg flex items-center justify-center font-semibold">
                {userAvatar(item.name)}
              </div>
            </td>
            <td className="py-2 w-70 truncate">{item.name}</td>
            <td className="py-2 w-70 truncate">{item.email}</td>
            <td className="py-2 w-80 truncate">
              {item.address.street} {item.address.suite}
            </td>
            <td className="py-2 w-70 truncate">{item.phone}</td>
            <td className="py-2 w-50">
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
        ))}
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
  );
}
