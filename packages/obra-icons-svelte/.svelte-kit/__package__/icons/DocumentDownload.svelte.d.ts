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
export type DocumentDownloadProps = typeof __propDef.props;
export type DocumentDownloadEvents = typeof __propDef.events;
export type DocumentDownloadSlots = typeof __propDef.slots;
export default class DocumentDownload extends SvelteComponentTyped<DocumentDownloadProps, DocumentDownloadEvents, DocumentDownloadSlots> {
}
export {};
