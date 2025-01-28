import { GlobalVariants } from '../../interfaces/global-variants';

export interface FeedbackProps {
    headline: string;
    likeText: string;
    dislikeText: string;
    variant: GlobalVariants;
    onLikeClick?: () => void;
    onDislikeClick?: () => void;
}
//# sourceMappingURL=feedback.interface.d.ts.map