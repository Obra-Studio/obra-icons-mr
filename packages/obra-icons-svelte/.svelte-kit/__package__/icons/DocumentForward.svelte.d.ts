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
export type DocumentForwardProps = typeof __propDef.props;
export type DocumentForwardEvents = typeof __propDef.events;
export type DocumentForwardSlots = typeof __propDef.slots;
export default class DocumentForward extends SvelteComponentTyped<DocumentForwardProps, DocumentForwardEvents, DocumentForwardSlots> {
}
export {};
