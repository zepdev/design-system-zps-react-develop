import { RichTextProps } from '../rich-text';
import { GlobalVariants } from '../../interfaces/global-variants';
import { HeaderShortProps } from '../header-short';

export interface RichTextPatternProps extends Omit<RichTextProps, 'variant'>, Partial<Omit<HeaderShortProps, 'variant'>> {
    variant?: GlobalVariants;
}
//# sourceMappingURL=RichTextPattern.interface.d.ts.map