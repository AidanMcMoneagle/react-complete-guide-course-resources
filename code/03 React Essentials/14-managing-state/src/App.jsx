import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {

  //most only call react hooks at the top level.
  //must only call react hooks from react components or custom hooks.
  
  //useState returns an array with two values. 
  // pass a default value to useState and it will be used as the initial state value.
  // The first value is the current state 
  // second value is a function that can be used to update the state. 
  // When you call the update function, React will re-render the component with the new state value.
  const [ selectedTopic, setSelectedTopic ] = useState('Please click a button');
  
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);

    //when you call the state update function, react will schedule a re render. This means that the console.log statement will execute before the component re renders with the new state value. So you will see the old state value in the console log. After the component re renders, you will see the new state value in the UI. This is because state updates in React are asynchronous and are batched together for performance reasons.
    console.log(selectedTopic);
  }

  console.log('APP COMPONENT EXECUTING');

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
