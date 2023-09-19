import PropTypes from 'prop-types';

const TextAnalysis = ({ analysisResults }) => (
    <>
      <h2>Text Analysis Results</h2>
      <ul>
        {Object.entries(analysisResults).map(([word, count]) => (
          <li key={word}>
            {word} - {count}
          </li>
        ))}
      </ul>
    </>
);

TextAnalysis.propTypes = {
    analysisResults: PropTypes.object.isRequired,
};

export default TextAnalysis;
