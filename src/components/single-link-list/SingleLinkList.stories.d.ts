import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<import("./SingleLinkList.interface").SingleLinkListProps>;
    tags: string[];
    argTypes: {
        theme: {
            children: {
                control: {
                    type: string;
                    options: string[];
                };
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=SingleLinkList.stories.d.ts.map