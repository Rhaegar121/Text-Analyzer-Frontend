import { useState } from 'react'
import FileUpload from './FileUpload'
import TextAnalysis from './TextAnalysis'
import './App.css'

function App() {
  const [analysisResults, setAnalysisResults] = useState(null);

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch('http://127.0.0.1:3000/api/text_analysis/analyze', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    setAnalysisResults(data);
  };

  return (
    <>
      <h1>Text Analyzer</h1>
      <FileUpload onFileUpload={handleFileUpload} />
      {analysisResults && <TextAnalysis analysisResults={analysisResults} />}
    </>
  )
}

export default App
