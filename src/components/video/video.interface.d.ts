import { GlobalVariants } from '../../interfaces/global-variants';
import { HeaderLongProps } from '../header-long';

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
    header: HeaderLongProps;
    variant?: GlobalVariants;
    className?: string;
}
//# sourceMappingURL=video.interface.d.ts.map