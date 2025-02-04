import { GlobalVariants } from '../../interfaces/global-variants';

export interface SingleVideo {
    title: string;
    tagline: string;
    description: string;
    url: string;
    thumbnail: string;
    linkHref?: string;
    linkText?: string;
}
export interface VideoProps {
    videos: SingleVideo[];
    variant?: GlobalVariants;
    className?: string;
}
//# sourceMappingURL=video.interface.d.ts.map