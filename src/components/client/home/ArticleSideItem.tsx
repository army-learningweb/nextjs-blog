type ArticleSideItemProps = {
  title: string;
  desc: string;
  category: string;
  date: string;
};

export default function ArticleSideItem({
  title,
  desc,
  category,
  date,
}: ArticleSideItemProps) {
  return (
    <article className="flex gap-4">
      <div className="w-50 bg-gray-200 rounded-xl h-30 shrink-0"></div>
      <div className="space-y-2">
        <h2 className="font-medium">{title}</h2>
        <p className="text-gray-500">{desc}</p>
        <div className="flex gap-4">
          <span>Danh mục: {category}</span>
          <span>({date})</span>
        </div>
      </div>
    </article>
  );
}
