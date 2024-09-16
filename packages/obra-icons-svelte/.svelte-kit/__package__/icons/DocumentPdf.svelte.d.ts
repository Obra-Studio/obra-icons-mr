import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
        strokeWidth?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DocumentPdfProps = typeof __propDef.props;
export type DocumentPdfEvents = typeof __propDef.events;
export type DocumentPdfSlots = typeof __propDef.slots;
export default class DocumentPdf extends SvelteComponentTyped<DocumentPdfProps, DocumentPdfEvents, DocumentPdfSlots> {
}
export {};
