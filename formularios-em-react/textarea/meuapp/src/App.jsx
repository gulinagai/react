import React from 'react'

// Textarea em react:

// Funciona da mesma forma que o input:

function App() {
  const [textarea, setTextarea] = React.useState('')

  return (
    <form>
      <textarea
        value={textarea}
        onChange={({ target })=>setTextarea(target.value)}
        rows="10"
      />
      {textarea}
    </form>
  );
}

export default App;
