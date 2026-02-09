import { ReactNode } from 'react';

export interface ScrollbarProps {
    children: ReactNode | ReactNode[];
    controlId: string;
    className?: string;
    dataTestId?: string;
    theme?: 'light' | 'dark';
    scrollOrientation?: 'both' | 'horizontal' | 'vertical';
    horizontalClassName?: string;
    ariaLabel?: string;
}
//# sourceMappingURL=Scrollbar.interface.d.ts.map