import { LinkListItemProps } from '../link-list-item';

export interface ContactFormProps {
    onSubmit: () => void;
    headline: string;
    tagline?: string;
    linkLists?: LinkListItemProps[];
    locale: 'en' | 'de';
}
//# sourceMappingURL=contact-form-interface.d.ts.map