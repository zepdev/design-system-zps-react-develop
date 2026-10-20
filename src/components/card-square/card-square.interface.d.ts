import { HTMLAttributes } from 'react';
import { GlobalVariants } from '../../interfaces/global-variants';
export interface CardSquareProps extends HTMLAttributes<HTMLDivElement> {
    imageSrc: string;
    imageAlt: string;
    /** Shows the AI badge on the image. */
    imageAiGenerated?: boolean;
    headline: string;
    description?: string;
    variant?: GlobalVariants;
    /** Without a URL the card is static (no link, arrow or hover). */
    url?: string;
    gtmHeadline?: string;
    gtmId?: string;
}
//# sourceMappingURL=card-square.interface.d.ts.map