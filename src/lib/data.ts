// Gọi type đã định nghĩa
import { Users } from "./definition";

// Danh sách User
const ITEM_PER_PAGE = 8;
export async function fetchUser(page : number): Promise<Users[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error(`Lỗi kết nối đến cơ sở dữ liệu ${res.status}`);
  }
  let data = await res.json();
  const start = (page - 1) * ITEM_PER_PAGE;
  const end = start + ITEM_PER_PAGE;
  data = data.slice(start, end);
  return data;
}

// Đếm tổng User
export async function totalUser(): Promise<number> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error(`Lỗi kết nối đến cơ sở dữ liệu ${res.status}`);
  }
  let data = await res.json();
  return data.length;
}
