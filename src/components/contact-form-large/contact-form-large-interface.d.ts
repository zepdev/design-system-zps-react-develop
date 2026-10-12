import { LocaleVariants } from '../../interfaces/global-variants';
import { ContactFormTexts } from '../contact-form/contact-form-locales';
export interface ContactFormLargeProps {
    onSubmit: (data: unknown) => void;
    headline: string;
    tagline?: string;
    locale: LocaleVariants;
    loading?: boolean;
    privacyPolicyUrl: string;
    preferencesUrl: string;
    /** Overrides for the default form texts (see `contactFormLocales`), e.g. the site's consent texts. */
    texts?: ContactFormTexts;
}
//# sourceMappingURL=contact-form-large-interface.d.ts.map