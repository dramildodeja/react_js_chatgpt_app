import React, { useState } from 'react';
import './App.css';
import SampleComponent from './SampleComponent';
import { processorResponse } from './OpenAIProcessor';

function App() {
  const [result, setResult] = useState('');
  React.useEffect(() => {
    (async function () {
      setResult(
        await processorResponse("what would be the Jest unit test case for component "
        + SampleComponent +
        " with import statements and describe")
      );
    })();
  },[]);
  return (
    <div className="App">
      <p>
        {result}
      </p>
    </div>
  );
}
export default App;
