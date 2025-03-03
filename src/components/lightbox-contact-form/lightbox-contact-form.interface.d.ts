import { LocaleVariants } from '../../interfaces/global-variants';

export interface LightboxContactFormProps {
    onSubmit: (data: unknown) => void;
    locale: LocaleVariants;
    isOpen: boolean;
    setIsOpen: (x: boolean) => void;
    loading?: boolean;
}
//# sourceMappingURL=lightbox-contact-form.interface.d.ts.map