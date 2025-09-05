export const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`scroll-mt-24 py-16 ${className}`}>
    {children}
  </section>
);
