interface SectionInterface {
  className: string;
  id: string;
  children: React.ReactNode;
}

const Section = ({ className, id, children }: SectionInterface) => {
  return (
    <section className={className} id={id}>
      {children}
    </section>
  );
};

export default Section;
