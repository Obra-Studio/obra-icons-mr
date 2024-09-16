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
export type DocumentProps = typeof __propDef.props;
export type DocumentEvents = typeof __propDef.events;
export type DocumentSlots = typeof __propDef.slots;
export default class Document extends SvelteComponentTyped<DocumentProps, DocumentEvents, DocumentSlots> {
}
export {};
