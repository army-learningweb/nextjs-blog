type SectionPageProps = {
    children: React.ReactNode;
    title?: string;
    id: string;
    ref?: React.Ref<HTMLElement>
    className?: string;
}   

export default function SectionPage({children, title, id, ref, className} : SectionPageProps){
    return (
      <section ref={ref} className={`space-y-4 scroll-mt-20 ${className}`} id={id}>
        {title && (
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        )}

        {children}
      </section>
    );
}