import React from 'react';

const App = (props) => {
  return (
    <div className="App">
      <button onClick={props.fetchDog}>Get Dog</button>
      <div>
        {props.loading ? 'Loading...' : null}
        {props.error ? 'Error loading.' : null}
        {props.imageLink ? <img src={props.imageLink} /> : null}
      </div>
    </div>
  );
}

export default App;
