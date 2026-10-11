type TitlePageProps = {
  title: string;
};

export default function TitlePage({ title }: TitlePageProps) {
  return <h1 className="text-xl font-medium tracking-tight">{title}</h1>;
}
