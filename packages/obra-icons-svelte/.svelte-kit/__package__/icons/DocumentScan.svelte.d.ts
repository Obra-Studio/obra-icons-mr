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
export type DocumentScanProps = typeof __propDef.props;
export type DocumentScanEvents = typeof __propDef.events;
export type DocumentScanSlots = typeof __propDef.slots;
export default class DocumentScan extends SvelteComponentTyped<DocumentScanProps, DocumentScanEvents, DocumentScanSlots> {
}
export {};
