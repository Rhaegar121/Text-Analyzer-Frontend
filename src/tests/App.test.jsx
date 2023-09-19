import { expect, it, describe } from 'vitest'
import { render, screen } from '@testing-library/react';
import App from '../App';
import TextAnalysis from '../components/TextAnalysis';

describe('App', () => {
    it('renders a header', () => {
        render(<App />);
        const header = screen.getByRole('heading', { name: 'Text Analyzer' });
        expect(header).toBeTruthy();
    });

    it('renders a FileUpload component', () => {
        render(<App />);
        const fileUpload = screen.getByRole('button', { name: 'Upload' });
        expect(fileUpload).toBeTruthy();
    });

    it('renders a TextAnalysis component when analysisResults is not null', () => {
        const analysisResults = {
            'chuck': 1,
            'norris': 2,
        };
        render(<App />);
        render(<TextAnalysis analysisResults={analysisResults} />);
        const fileUpload = screen.getByRole('button', { name: 'Upload' });
        fileUpload.click();
        const chuck = screen.getByText('chuck - 1');
        const norris = screen.getByText('norris - 2');
        expect(chuck).toBeTruthy();
        expect(norris).toBeTruthy();
    });
});