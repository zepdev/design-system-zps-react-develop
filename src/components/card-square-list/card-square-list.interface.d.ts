import { GlobalVariants } from '../../interfaces/global-variants';
import { CardSquareProps } from '../card-square';
import { HeaderLongProps } from '../header-long';

export interface CardSquareListProps extends Partial<Omit<HeaderLongProps, 'variant'>> {
    items: Omit<CardSquareProps, 'variant'>[];
    variant?: GlobalVariants;
}
//# sourceMappingURL=card-square-list.interface.d.ts.map