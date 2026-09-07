import { DropdownFilterItem } from '../form-fields/drop-down-filter';
import { LinkListItemProps } from '../link-list-item';
import { LocaleVariants } from '../../interfaces/global-variants';
export interface LightboxContactFormProps {
    onSubmit: (data: unknown) => void;
    locale: LocaleVariants;
    isOpen: boolean;
    setIsOpen: (x: boolean) => void;
    loading?: boolean;
    contactArea?: string;
    contactList?: LinkListItemProps[];
    privacyPolicyUrl: string;
    type?: 'default' | 'fair-events' | 'lead-contact';
    /** fair-events only: optional preferred-topic dropdown */
    fairTopics?: DropdownFilterItem[];
    /** fair-events only: optional preferred-contact-person dropdown */
    fairContactPersons?: DropdownFilterItem[];
}
//# sourceMappingURL=lightbox-contact-form.interface.d.ts.map