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
export type DocumentAddProps = typeof __propDef.props;
export type DocumentAddEvents = typeof __propDef.events;
export type DocumentAddSlots = typeof __propDef.slots;
export default class DocumentAdd extends SvelteComponentTyped<DocumentAddProps, DocumentAddEvents, DocumentAddSlots> {
}
export {};
