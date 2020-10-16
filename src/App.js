import React, { useState, useEffect } from 'react';
import marked from 'marked';
import { defaultMarkdown } from './defaultMarkdown'
import './App.css';



const App = () => {

  const [markdown, setMarkdown] = useState(defaultMarkdown)
  const [preview, setPreview] = useState('')

  const updateMarkdown = e => {
    setMarkdown(e.target.value)

  }

  useEffect(() => {
    const convertedMarkdown = marked(markdown)
    setPreview(convertedMarkdown)
  }, [markdown])

  return (
    <div className="App">
      <h1>Write your markdown here:</h1>
      <textarea id="editor" value={markdown} onChange={updateMarkdown}></textarea>
      <h2>Converted Markdown:</h2>
      <div id="previewDiv">
        <div id="preview" dangerouslySetInnerHTML={{ __html: preview }}></div>
      </div>
    </div>
  );
}

export default App;
