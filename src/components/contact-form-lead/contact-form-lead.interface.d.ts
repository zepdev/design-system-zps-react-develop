import { LocaleVariants } from '../../interfaces/global-variants';
import { ContactFormTexts } from '../contact-form/contact-form-locales';
export interface ContactFormLeadProps {
    locale: LocaleVariants;
    loading?: boolean;
    onSubmit: (data: unknown) => void;
    privacyPolicyUrl: string;
    /** Overrides for the default form texts (see `contactFormLocales`), e.g. the site's consent texts. */
    texts?: ContactFormTexts;
    /** Email shown in the contact consent text. */
    contactEmail?: string;
}
//# sourceMappingURL=contact-form-lead.interface.d.ts.map