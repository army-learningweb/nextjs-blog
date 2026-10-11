import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

type ArticleSliderItemProps = {
  title: string;
  desc: string;
  date: string;
};

export default function ArticleSliderItem({
  title,
  desc,
  date,
}: ArticleSliderItemProps) {
  return (
    <article className="w-[25%] rounded-xl overflow-hidden border border-gray-100">
      <div className="bg-gray-200 h-50 w-full"></div>
      <div className="p-4 space-y-2">
        <h2 className="font-medium">{title}</h2>
        <p className="text-gray-500">{desc}</p>
        <div className="flex justify-between items-center">
          <span>({date})</span>
          <Button variant="link" className="px-0">
            <span>Xem thêm</span>
            <ArrowUpRight size={15} />
          </Button>
        </div>
      </div>
    </article>
  );
}
