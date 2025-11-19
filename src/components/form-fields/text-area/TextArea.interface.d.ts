import { InputHTMLAttributes } from 'react';

export interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    disabled?: boolean;
    label?: string;
    message?: string;
    readOnly?: boolean;
    required?: boolean;
    state?: 'default' | 'error' | 'info';
    totalCharacters?: number;
}
//# sourceMappingURL=TextArea.interface.d.ts.map