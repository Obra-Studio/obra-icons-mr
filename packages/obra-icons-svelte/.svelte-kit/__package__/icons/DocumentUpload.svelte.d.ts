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
export type DocumentUploadProps = typeof __propDef.props;
export type DocumentUploadEvents = typeof __propDef.events;
export type DocumentUploadSlots = typeof __propDef.slots;
export default class DocumentUpload extends SvelteComponentTyped<DocumentUploadProps, DocumentUploadEvents, DocumentUploadSlots> {
}
export {};
