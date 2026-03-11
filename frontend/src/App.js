import React from 'react';

function App() {

  const callAPI = async () => {
    const res = await fetch("http://localhost:5000/api")
    const data = await res.json()
    alert(data.message)
  }

  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h1>DevOps Monitoring Demo</h1>
      <button onClick={callAPI}>Send Request</button>
    </div>
  );
}

export default App;