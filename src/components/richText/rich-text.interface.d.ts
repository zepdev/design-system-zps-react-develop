import React from 'react';
export interface TextStyle {
    fontWeight?: string;
    fontStyle?: string;
}
export interface Block {
    type: string;
    depth: number;
    text: string;
    inlineStyleRanges: Array<{
        offset: number;
        length: number;
        style: string;
    }>;
    entityRanges: Array<{
        offset: number;
        length: number;
        key: number;
    }>;
}
export interface EntityMap {
    [key: string]: {
        type: string;
        mutability: string;
        data: {
            url: string;
        };
    };
}
export interface Content {
    blocks: Block[];
    entityMap: EntityMap;
}
export interface RichTextProps {
    content: Content;
    textColor?: 'white' | 'indigo' | 'black';
    children?: React.ReactNode;
}
//# sourceMappingURL=rich-text.interface.d.ts.map