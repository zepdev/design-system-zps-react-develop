import { StoryObj } from '@storybook/react';
import { TeaserSimpleProps } from './teaser-simple.interface';
declare const meta: {
    title: string;
    component: import('react').FC<TeaserSimpleProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
/** With a text under the headline and a link button (the ZES "Introducing" banner). */
export declare const WithDescriptionAndLink: Story;
//# sourceMappingURL=Teaser-simple.stories.d.ts.map