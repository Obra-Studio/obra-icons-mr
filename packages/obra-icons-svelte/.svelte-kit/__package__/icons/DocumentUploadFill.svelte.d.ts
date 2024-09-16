import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DocumentUploadFillProps = typeof __propDef.props;
export type DocumentUploadFillEvents = typeof __propDef.events;
export type DocumentUploadFillSlots = typeof __propDef.slots;
export default class DocumentUploadFill extends SvelteComponentTyped<DocumentUploadFillProps, DocumentUploadFillEvents, DocumentUploadFillSlots> {
}
export {};
