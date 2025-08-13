import { HeaderLongProps } from '../header-long';
import { GlobalVariants } from '../../interfaces/global-variants';
import { BlocksContent } from '@strapi/blocks-react-renderer';

export interface Poi {
    key: string;
    title: string;
    position: google.maps.LatLngLiteral;
}
export interface MapCardProps extends Partial<Exclude<HeaderLongProps, 'variant'>> {
    content: BlocksContent;
    buttonText: string;
    variant?: GlobalVariants;
    locations: Poi[];
    googleMapLink: string;
    apiKey: string;
    panelHeadline: string;
    id?: string;
}
//# sourceMappingURL=MapCard.interface.d.ts.map