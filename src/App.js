import React from "react";
import EventPractice from "./EventPractive";
import EventPractiveObj from "./EventPractiveObj";

function App() {
  return (
    <div className="App">
      <>
        <h2>문자열 버전</h2>
        <EventPractice />
        <hr />
        <h2>객체 버전</h2>
        <EventPractiveObj />
      </>
    </div>
  );
}

export default App;
