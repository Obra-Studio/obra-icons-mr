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
export type DocumentCheckProps = typeof __propDef.props;
export type DocumentCheckEvents = typeof __propDef.events;
export type DocumentCheckSlots = typeof __propDef.slots;
export default class DocumentCheck extends SvelteComponentTyped<DocumentCheckProps, DocumentCheckEvents, DocumentCheckSlots> {
}
export {};
