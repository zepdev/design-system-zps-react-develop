import { StoryObj } from '@storybook/react';
import { RedirectModalProps } from './redirect-modal.interface';

declare const meta: {
    title: string;
    component: import('react').FC<RedirectModalProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=RedirectModal.stories.d.ts.map