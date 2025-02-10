import { default as React } from 'react';
import { AccordionProps, RichTextProps, THContext, TableProps, TextHighlightProps } from './TextHighlight.interface';

export declare const useTextHighlightContext: () => THContext;
declare const TextHighlight: {
    ({ buttonText, children, imageAlt, imageSrc, message, buttonOnClick, variant, imageAlignment, headline, bottomDescription, topDescription, ...headerLongProps }: TextHighlightProps): import("react/jsx-dev-runtime").JSX.Element;
    Accordion: React.FC<AccordionProps>;
    Table: React.FC<TableProps>;
    RichText: React.FC<RichTextProps>;
};
export { TextHighlight };
//# sourceMappingURL=TextHighlight.d.ts.map