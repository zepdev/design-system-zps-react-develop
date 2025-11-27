import { HTMLAttributes } from 'react';

export interface RedirectModalProps extends HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    setIsOpen: (x: boolean) => void;
    cancelText?: string;
    continueText?: string;
    continueUrl?: string;
    title?: string;
    message?: string;
}
//# sourceMappingURL=redirect-modal.interface.d.ts.map