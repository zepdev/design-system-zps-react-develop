import { BaseMediaProps, MediaTextButtonProps, MediaTextContentProps, MediaTextDescriptionProps, MediaTextHeadlineProps, MediaTextImageProps, MediaTextTaglineProps, MediaTextVariant } from './mediaText.interface';
export declare const useMediaTextContext: () => {
    imageAlignment: string;
    variant: MediaTextVariant;
};
declare const MediaText: {
    ({ imageAlignment, children, variant, }: MediaTextContentProps & BaseMediaProps): import("react/jsx-dev-runtime").JSX.Element;
    Image: ({ src, alt, aspectRatio }: MediaTextImageProps) => import("react/jsx-dev-runtime").JSX.Element;
    Body: ({ children }: MediaTextContentProps) => import("react/jsx-dev-runtime").JSX.Element;
    Tagline: ({ children }: MediaTextTaglineProps) => import("react/jsx-dev-runtime").JSX.Element;
    Headline: ({ children }: MediaTextHeadlineProps) => import("react/jsx-dev-runtime").JSX.Element;
    Description: ({ children }: MediaTextDescriptionProps) => import("react/jsx-dev-runtime").JSX.Element;
    Button: ({ labelPrimary, labelSecondary, onClickPrimary, onClickSecondary }: MediaTextButtonProps) => import("react/jsx-dev-runtime").JSX.Element;
};
export { MediaText };
//# sourceMappingURL=MediaText.d.ts.map