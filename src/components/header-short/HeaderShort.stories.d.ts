import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('react').FC<import('../header-short-component').HeaderShortComponentProps>;
    tags: string[];
    argTypes: {
        variant: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const LongHeadline: Story;
export declare const ComponentWithoutTagline: Story;
export declare const ComponentWithoutArrow: Story;
export declare const ComponentWithBackgroundZPS: Story;
export declare const ComponentWithBackgroundCat: Story;
//# sourceMappingURL=HeaderShort.stories.d.ts.map