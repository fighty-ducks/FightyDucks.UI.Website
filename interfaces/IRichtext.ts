export interface IRichtext {
    type: string;
    content?: IRichtext[];
    marks?: IRichtext[];
    attrs?: unknown;
    text?: string;
}