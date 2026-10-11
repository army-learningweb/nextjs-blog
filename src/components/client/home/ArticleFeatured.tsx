import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ArticleFeatured() {
  return (
    <>
      <div className="w-full bg-gray-200 h-100 rounded-xl"></div>
      <h2 className="text-xl font-semibold tracking-tight">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi illo
        quas, ipsum inventore eos consequuntur aperiam itaque optio reiciendis
        at
      </h2>
      <p className="text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum odio
        commodi nostrum laborum mollitia, ipsam eligendi placeat dolore iusto
        quod aliquid tenetur illum, nemo voluptatem. Consequatur libero quia
        expedita laboriosam?
      </p>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
              className="grayscale"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span>Lưu Đức Vỹ</span>
        </div>

        <div className="flex gap-4">
          <span>Danh mục: Thế giới</span>
          <span>(15/08/2026)</span>
        </div>
      </div>
    </>
  );
}
