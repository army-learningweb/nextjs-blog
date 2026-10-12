type SectionPageProps = {
  children: React.ReactNode;
};

export default function SectionPage({ children }: SectionPageProps) {
  return <section className="space-y-6">{children}</section>;
}
