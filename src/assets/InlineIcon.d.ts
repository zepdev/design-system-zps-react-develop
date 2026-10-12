declare const ICONS: {
    edit: {
        width: number;
        height: number;
        paths: string[];
    };
    email: {
        width: number;
        height: number;
        paths: string[];
    };
    download: {
        width: number;
        height: number;
        paths: string[];
    };
    play: {
        width: number;
        height: number;
        paths: string[];
    };
};
export type InlineIconName = keyof typeof ICONS;
interface InlineIconProps {
    name: InlineIconName;
    className?: string;
    width?: number;
    label?: string;
}
declare const InlineIcon: ({ name, className, width, label }: InlineIconProps) => import("react/jsx-dev-runtime").JSX.Element;
export default InlineIcon;
//# sourceMappingURL=InlineIcon.d.ts.map