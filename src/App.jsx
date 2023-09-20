import { useState } from 'react'
import FileUpload from './components/FileUpload'
import TextAnalysis from './components/TextAnalysis'
import './App.css'

function App() {
  const [analysisResults, setAnalysisResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = async (file) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://127.0.0.1:3000/api/text_analysis/analyze', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setAnalysisResults(data);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Text Analyzer</h1>
      <FileUpload onFileUpload={handleFileUpload} />
      {isLoading ? (
        <p>Loading...</p>
      ) : analysisResults ? (
        <TextAnalysis analysisResults={analysisResults} />
      ) : null}
    </div>
  )
}

export default App
