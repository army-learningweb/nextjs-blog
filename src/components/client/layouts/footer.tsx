import Logo from "@/components/ui/logo";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="mt-15 mb-5 flex justify-between">
        <div>
          <Logo />
          <p>SaigonNews - Đơn vị cung cấp tin tức tại Việt Nam</p>
          <p>Địa chỉ: Thành Phố Hồ Chí Minh</p>
          <p>Liên hệ: 0000-0000-0000</p>
        </div>

        <div className="space-y-1">
          <h2 className="font-bold">Menu</h2>
          <p>Trang chủ</p>
          <p>Thể thao</p>
          <p>Kinh tế</p>
          <p>Công nghệ</p>
          <p>Sức khỏe</p>
          <p>Khoa học</p>
        </div>

        <div className="space-y-1">
          <h2 className="font-bold">Chính sách</h2>
          <p>Chính sách quyền lợi</p>
          <p>Chính sách bảo mật thông tin</p>
          <p>Chính sách bảo mật</p>
          <p>Chính sách sử dụng</p>
        </div>

        <div className="space-y-2">
          <h2 className="font-bold">Kết nối mạng xã hội</h2>
          <div className="flex gap-2 items-center">
            <Image
              src="https://thesvg.org/icons/youtube/default.svg"
              alt="YouTube"
              width={24}
              height={24}
            />

            <span>Youtube</span>
          </div>

          <div className="flex gap-2 items-center">
            <Image
              src="https://thesvg.org/icons/zalo/default.svg"
              alt="Zalo"
              width={24}
              height={24}
            />

            <span>Zalo</span>
          </div>

          <div className="flex gap-2 items-center">
            <Image
              src="https://thesvg.org/icons/tiktok-badge/default.svg"
              alt="Tiktok"
              width={24}
              height={24}
            />

            <span>Tiktok</span>
          </div>

          <div className="flex gap-2 items-center">
            <Image
              src="https://thesvg.org/icons/facebook/default.svg"
              alt="Facebook"
              width={24}
              height={24}
            />

            <span>Facebook</span>
          </div>
        </div>
      </footer>

      <hr className="border border-gray-100" />

      <div className="py-5 flex justify-between">
        <p>SaigonNews - Makeby Lưu Đức Vỹ</p>
        <p>@copyright 11/10/2026</p>
      </div>
    </>
  );
}
