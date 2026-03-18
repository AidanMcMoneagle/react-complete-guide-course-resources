
//children is a special prop that is automatically passed to every component. It contains the content between the opening and closing tags of a component when it is used. This allows you to create reusable components that can wrap other content, making it easy to build complex UIs with a simple and consistent API.
export default function TabButton(props) {
  return (
    <li>
      <button>{props.children}</button>
    </li>
  );
}

//Can also be written like this using destructuring to directly access the children prop. This is a common pattern in React and can make your code cleaner and easier to read.
// export default function TabButton({children}) {
//   return (
//     <li>
//       <button>{children}</button>
//     </li>
//   );
// }