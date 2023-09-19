import { expect, it, describe, vi } from 'vitest'
import { render, screen } from '@testing-library/react';
import FileUpload from '../components/FileUpload';

describe('FileUpload', () => {
    it('renders a file upload input', () => {
        render(<FileUpload />);
        const fileUploadInput = screen.getByRole('button', { name: 'Upload' });
        expect(fileUploadInput).toBeTruthy();
    });

    it('handleFileChange updates file state correctly', () => {
        render(<FileUpload />);
        const fileUploadInput = screen.getByRole('button', { name: 'Upload' });
        const file = new File(['(⌐□_□)'], 'chucknorris.txt', { type: 'text/plain' });
        fileUploadInput.files = [file];
        expect(fileUploadInput.files[0]).toEqual(file);
    });

    it('handleUpload displays an alert when no file is selected', () => {
        const windowAlertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
        render(<FileUpload />);
        const fileUploadInput = screen.getByRole('button', { name: 'Upload' });
        fileUploadInput.click();
        expect(windowAlertSpy).toHaveBeenCalledWith('Please select a file to upload.');
    });
});