//use the rest operator to collect all props that are not explicitly destructured. This allows us to forward any additional props to the section element.
export default function Section({ title, children, ...props }) {
  return (
    //use the spread operator to extract all remaining props and forward them to the section element. This is a common pattern in React and allows you to create flexible and reusable components that can accept any props without having to explicitly define them.
    <section {...props}> {/* this is how we forward props. We can add any prop to the Section component and it will be forwarded to the section element */}
      <h2>{title}</h2>
      {children}
    </section>
  );
}
