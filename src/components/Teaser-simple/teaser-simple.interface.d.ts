import { ButtonHTMLAttributes, MouseEvent } from 'react';
export interface TeaserSimpleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    teaserText: string;
    /** Optional text under the headline. */
    description?: string;
    buttonText: string;
    buttonTitle?: string;
    /** Makes the button a link. */
    href?: string;
    onClick?: (ev: MouseEvent<HTMLElement>) => void;
}
//# sourceMappingURL=teaser-simple.interface.d.ts.map