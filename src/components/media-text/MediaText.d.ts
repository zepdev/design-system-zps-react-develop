import { MediaTextContentProps } from './MediaText.interface';
import { GlobalVariants } from '../../interfaces/global-variants';

export declare const useMediaTextContext: () => {
    imageAlignment: string;
    variant: GlobalVariants;
};
declare const MediaText: ({ imageAlignment, variant, headline, tagline, content, labelSecondary, labelPrimary, onClickSecondary, onClickPrimary, src, alt, }: MediaTextContentProps) => import("react/jsx-dev-runtime").JSX.Element;
export { MediaText };
//# sourceMappingURL=MediaText.d.ts.map