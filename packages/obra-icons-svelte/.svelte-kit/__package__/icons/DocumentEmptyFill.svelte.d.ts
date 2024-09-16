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
export type DocumentEmptyFillProps = typeof __propDef.props;
export type DocumentEmptyFillEvents = typeof __propDef.events;
export type DocumentEmptyFillSlots = typeof __propDef.slots;
export default class DocumentEmptyFill extends SvelteComponentTyped<DocumentEmptyFillProps, DocumentEmptyFillEvents, DocumentEmptyFillSlots> {
}
export {};
