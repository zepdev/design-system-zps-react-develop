import { StoryObj } from '@storybook/react';
import { AccordionPatternProps } from './accordion.interface';

declare const meta: {
    title: string;
    component: ({ topDescription, bottomDescription, contents, variant }: AccordionPatternProps) => import("react/jsx-dev-runtime").JSX.Element;
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
//# sourceMappingURL=AccordionPattern.stories.d.ts.map