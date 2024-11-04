import { MouseEvent } from 'react';
export interface LinkComponentProps {
    linkText?: string;
    buttonText?: string;
    linkHref?: string;
    type?: 'button' | 'link' | 'none';
    buttonOnClick?: (ev: MouseEvent<HTMLElement>) => void;
    textColor?: 'white' | 'black' | 'indigo';
}
export interface HeaderLongComponentProps extends LinkComponentProps {
    tagline?: string;
    headline: string;
    description?: string;
    theme?: 'cat' | 'power-systems';
}
//# sourceMappingURL=HeaderLongComponent.interface.d.ts.map