import { LocaleVariants } from '../../interfaces/global-variants';
import { ContactFormTexts } from './contact-form-locales';
import { LinkListItemProps } from '../link-list-item';
export interface ContactFormProps {
    onSubmit: (data: unknown) => void;
    headline: string;
    tagline?: string;
    linkLists?: LinkListItemProps[];
    locale: LocaleVariants;
    loading?: boolean;
    privacyPolicyUrl: string;
    /** Overrides for the default form texts (see `contactFormLocales`), e.g. the site's consent texts. */
    texts?: ContactFormTexts;
}
//# sourceMappingURL=contact-form-interface.d.ts.map