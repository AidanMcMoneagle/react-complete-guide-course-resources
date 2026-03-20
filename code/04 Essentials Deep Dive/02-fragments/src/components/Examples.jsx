import { useState } from 'react';
import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';

function Examples(){

      const [selectedTopic, setSelectedTopic] = useState();
    
      //we pass this function to the TabButton component. When a button is clicked, it will call this function and pass the topic that was selected. This will update the state of the selected topic in the Examples component.
      function handleSelect(selectedButton) {
               setSelectedTopic(selectedButton);
      }
    
      console.log('EXAMPLES COMPONENT EXECUTING');
    
      let tabContent = <p>Please select a topic.</p>;
    
      if (selectedTopic) {
        tabContent = (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        );
      }
    
    return(
        <section id="examples">
                  <h2>Examples</h2>
                  <menu>
                    <TabButton
                      isSelected={selectedTopic === 'components'}
                      onSelect={() => handleSelect('components')}
                    >
                      Components
                    </TabButton>
                    <TabButton
                      isSelected={selectedTopic === 'jsx'}
                      onSelect={() => handleSelect('jsx')}
                    >
                      JSX
                    </TabButton>
                    <TabButton
                      isSelected={selectedTopic === 'props'}
                      onSelect={() => handleSelect('props')}
                    >
                      Props
                    </TabButton>
                    <TabButton
                      isSelected={selectedTopic === 'state'}
                      onSelect={() => handleSelect('state')}
                    >
                      State
                    </TabButton>
                  </menu>
                  {tabContent}
                </section>
    )
}

export default Examples;