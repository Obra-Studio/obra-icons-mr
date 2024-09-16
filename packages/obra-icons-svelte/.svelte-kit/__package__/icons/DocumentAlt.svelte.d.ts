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
export type DocumentAltProps = typeof __propDef.props;
export type DocumentAltEvents = typeof __propDef.events;
export type DocumentAltSlots = typeof __propDef.slots;
export default class DocumentAlt extends SvelteComponentTyped<DocumentAltProps, DocumentAltEvents, DocumentAltSlots> {
}
export {};
