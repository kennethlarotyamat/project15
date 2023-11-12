function Hello1() {
    return <h1>Here are a few other things I'd Like to tell you about</h1>;
  }

  const container = document.getElementById('mydiv3');
  const root = ReactDOM.createRoot(container);
  root.render(<Hello1 />)