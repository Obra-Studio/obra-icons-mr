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
export type DocumentRemoveProps = typeof __propDef.props;
export type DocumentRemoveEvents = typeof __propDef.events;
export type DocumentRemoveSlots = typeof __propDef.slots;
export default class DocumentRemove extends SvelteComponentTyped<DocumentRemoveProps, DocumentRemoveEvents, DocumentRemoveSlots> {
}
export {};
