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
export type DocumentSmallProps = typeof __propDef.props;
export type DocumentSmallEvents = typeof __propDef.events;
export type DocumentSmallSlots = typeof __propDef.slots;
export default class DocumentSmall extends SvelteComponentTyped<DocumentSmallProps, DocumentSmallEvents, DocumentSmallSlots> {
}
export {};
