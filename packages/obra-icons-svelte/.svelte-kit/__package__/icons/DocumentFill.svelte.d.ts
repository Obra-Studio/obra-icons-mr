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
export type DocumentFillProps = typeof __propDef.props;
export type DocumentFillEvents = typeof __propDef.events;
export type DocumentFillSlots = typeof __propDef.slots;
export default class DocumentFill extends SvelteComponentTyped<DocumentFillProps, DocumentFillEvents, DocumentFillSlots> {
}
export {};
