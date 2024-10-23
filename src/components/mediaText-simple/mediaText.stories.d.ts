import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: {
        ({ imageAlignment, children, variant, }: import("./mediaText.interface").MediaTextContentProps & import("./mediaText.interface").BaseMediaProps): import("react/jsx-dev-runtime").JSX.Element;
        Image: ({ src, alt, aspectRatio }: import("./mediaText.interface").MediaTextImageProps) => import("react/jsx-dev-runtime").JSX.Element;
        Body: ({ children }: import("./mediaText.interface").MediaTextContentProps) => import("react/jsx-dev-runtime").JSX.Element;
        Tagline: ({ children }: import("./mediaText.interface").MediaTextTaglineProps) => import("react/jsx-dev-runtime").JSX.Element;
        Headline: ({ children }: import("./mediaText.interface").MediaTextHeadlineProps) => import("react/jsx-dev-runtime").JSX.Element;
        Description: ({ children }: import("./mediaText.interface").MediaTextDescriptionProps) => import("react/jsx-dev-runtime").JSX.Element;
        Button: ({ labelPrimary, labelSecondary, onClickPrimary, onClickSecondary }: import("./mediaText.interface").MediaTextButtonProps) => import("react/jsx-dev-runtime").JSX.Element;
    };
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
export declare const ImageRight: Story;
//# sourceMappingURL=mediaText.stories.d.ts.map