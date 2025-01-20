import { LocaleVariants } from '../../interfaces/global-variants';
import { LinkListItemProps } from '../link-list-item';

export interface ContactFormProps {
    onSubmit: (x: unknown) => void;
    headline: string;
    tagline?: string;
    linkLists?: LinkListItemProps[];
    locale: LocaleVariants;
}
//# sourceMappingURL=contact-form-interface.d.ts.map