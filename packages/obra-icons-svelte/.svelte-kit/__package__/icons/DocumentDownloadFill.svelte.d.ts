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
export type DocumentDownloadFillProps = typeof __propDef.props;
export type DocumentDownloadFillEvents = typeof __propDef.events;
export type DocumentDownloadFillSlots = typeof __propDef.slots;
export default class DocumentDownloadFill extends SvelteComponentTyped<DocumentDownloadFillProps, DocumentDownloadFillEvents, DocumentDownloadFillSlots> {
}
export {};
