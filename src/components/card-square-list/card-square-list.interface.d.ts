import { ReactNode } from '../../../node_modules/@types/react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { CardSquareProps } from '../card-square/card-square.interface';
export interface CardSquareListProps {
    headlines: Omit<CardSquareProps, 'variant'>[];
    imageSrc: string;
    imageAlt: string;
    children?: ReactNode;
    variant?: GlobalVariants;
}
//# sourceMappingURL=card-square-list.interface.d.ts.map