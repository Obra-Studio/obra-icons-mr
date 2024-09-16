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
export type DocumentEmptyProps = typeof __propDef.props;
export type DocumentEmptyEvents = typeof __propDef.events;
export type DocumentEmptySlots = typeof __propDef.slots;
export default class DocumentEmpty extends SvelteComponentTyped<DocumentEmptyProps, DocumentEmptyEvents, DocumentEmptySlots> {
}
export {};
