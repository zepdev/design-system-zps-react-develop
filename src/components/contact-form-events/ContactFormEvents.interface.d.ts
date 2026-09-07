import { DropdownFilterItem } from '../form-fields/drop-down-filter';
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
}
//# sourceMappingURL=ContactFormEvents.interface.d.ts.map