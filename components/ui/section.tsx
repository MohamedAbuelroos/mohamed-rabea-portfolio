interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section
      className={`
        w-full
        py-20
        md:py-28
        ${className}
      `}
    >
      <div className="container mx-auto px-6">{children}</div>
    </section>
  );
}
