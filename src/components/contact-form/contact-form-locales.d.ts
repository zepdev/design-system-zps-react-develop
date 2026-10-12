import { LocaleVariants } from '../../interfaces/global-variants';
export declare const contactFormLocales: Record<LocaleVariants, Record<string, string>>;
/**
 * Per-site overrides for any key above, e.g. the consent texts that name the company
 * (`zeppelinPNOExtended`, `informConsent`, `contactConsent`).
 */
export type ContactFormTexts = Record<string, string>;
export declare const getContactFormLocales: (texts?: ContactFormTexts) => Record<LocaleVariants, Record<string, string>>;
//# sourceMappingURL=contact-form-locales.d.ts.map