import { useState } from 'react';
import PropTypes from 'prop-types';

const FileUpload = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      onFileUpload(file);
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </>
  );
}

FileUpload.propTypes = {
    onFileUpload: PropTypes.func.isRequired,
};

export default FileUpload;
