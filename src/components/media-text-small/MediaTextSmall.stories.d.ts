import { StoryObj } from '@storybook/react';
import { MediaTextSmallProps } from '../media-text-small/media-text-small.interface';

declare const meta: {
    title: string;
    component: import('react').FC<MediaTextSmallProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=MediaTextSmall.stories.d.ts.map