import { StoryObj } from '@storybook/react';
import { ContactFormLeadProps } from './contact-form-lead.interface';

declare const meta: {
    title: string;
    component: import('react').FC<ContactFormLeadProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=ContactFormLead.stories.d.ts.map