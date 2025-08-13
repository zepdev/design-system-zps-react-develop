import { StoryObj } from '@storybook/react';
import { MapCardProps } from './MapCard.interface';

declare const meta: {
    title: string;
    component: import('react').FC<MapCardProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=MapCard.stories.d.ts.map