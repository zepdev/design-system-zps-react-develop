import { GlobalVariants } from '../../interfaces/global-variants';
import { CardSquareProps } from '../card-square';

export interface CardSquareListProps {
    headlines: Omit<CardSquareProps, 'variant'>[];
    variant?: GlobalVariants;
}
//# sourceMappingURL=card-square-list.interface.d.ts.map