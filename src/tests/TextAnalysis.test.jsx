import { expect, it, describe } from 'vitest'
import { render, screen } from '@testing-library/react';
import TextAnalysis from '../components/TextAnalysis';

describe('TextAnalysis', () => {
    it('renders a header', () => {
        render(<TextAnalysis analysisResults={{}} />);
        const header = screen.getByRole('heading', { name: 'Text Analysis Results' });
        expect(header).toBeTruthy();
    });

    it('renders a list of words and their counts', () => {
        const analysisResults = {
            'chuck': 1,
            'norris': 2,
        };
        render(<TextAnalysis analysisResults={analysisResults} />);
        const chuck = screen.getByText('chuck - 1');
        const norris = screen.getByText('norris - 2');
        expect(chuck).toBeTruthy();
        expect(norris).toBeTruthy();
    });
});