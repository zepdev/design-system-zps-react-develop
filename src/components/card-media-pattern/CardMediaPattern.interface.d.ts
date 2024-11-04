import { CardMediaProps } from '../card-media-component';
import { HeaderLongProps } from '../header-long';
export interface CardMediaPatternProps extends Omit<HeaderLongProps, 'textColor' | 'type'> {
    cards: CardMediaProps[];
    className?: string;
    theme?: 'cat' | 'power-systems';
    imageOrientation?: 'horizontal' | 'vertical';
}
//# sourceMappingURL=CardMediaPattern.interface.d.ts.map