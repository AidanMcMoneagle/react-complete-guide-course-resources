
//rest parameter syntax allows us to collect all remaining props that are not explicitly destructured. This is useful for forwarding props to child components without having to explicitly define them in the parent component. In this example, we are collecting all remaining props in the props variable and forwarding them to the section element using the spread operator.
export default function TabButton({ children, isSelected, ...props }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      {/* use the spread operator to expand the props object into key value pairs and forward all remaining props to the button element */}
      <button className={isSelected ? 'active' : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
