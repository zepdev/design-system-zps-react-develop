import { StoryObj } from '@storybook/react';
import { CardSquareProps } from './card-square.interface';
declare const meta: {
    title: string;
    component: import('react').FC<CardSquareProps>;
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
/** Without a URL: a static card, no link, arrow or hover (the ZES "Our approach" cards). */
export declare const Static: Story;
//# sourceMappingURL=CardSquare.stories.d.ts.map