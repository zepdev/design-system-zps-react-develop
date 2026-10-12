import { DropdownFilterItem } from '../form-fields/drop-down-filter';
import { ContactFormTexts } from '../contact-form/contact-form-locales';
import { LocaleVariants } from '../../interfaces/global-variants';
export interface ContactFormEventsProps {
    locale: LocaleVariants;
    loading?: boolean;
    onSubmit: (data: unknown) => void;
    privacyPolicyUrl: string;
    /** Optional "preferred topic" dropdown; hidden when empty. */
    topics?: DropdownFilterItem[];
    /** Optional "preferred contact person" dropdown; hidden when empty. */
    contactPersons?: DropdownFilterItem[];
    /** Overrides for the default form texts (see `contactFormLocales`), e.g. the site's consent texts. */
    texts?: ContactFormTexts;
}
//# sourceMappingURL=ContactFormEvents.interface.d.ts.map