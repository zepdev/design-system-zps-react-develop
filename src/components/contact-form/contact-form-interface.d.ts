import { LinkListItemProps } from '../link-list-item';
import { LocaleVariants } from '../../interfaces/global-variants';

export interface ContactFormProps {
    onSubmit: () => void;
    headline: string;
    tagline?: string;
    linkLists?: LinkListItemProps[];
    locale: LocaleVariants;
}
//# sourceMappingURL=contact-form-interface.d.ts.map