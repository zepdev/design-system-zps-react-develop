import { LocaleVariants } from '../../interfaces/global-variants';
import { LinkListItemProps } from '../link-list-item';

export interface LightboxContactFormProps {
    onSubmit: (data: unknown) => void;
    locale: LocaleVariants;
    isOpen: boolean;
    setIsOpen: (x: boolean) => void;
    loading?: boolean;
    contactArea?: string;
    contactList?: LinkListItemProps[];
    privacyPolicyUrl: string;
    type?: 'default' | 'fair-events';
}
//# sourceMappingURL=lightbox-contact-form.interface.d.ts.map