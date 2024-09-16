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
export type DocumentErrorProps = typeof __propDef.props;
export type DocumentErrorEvents = typeof __propDef.events;
export type DocumentErrorSlots = typeof __propDef.slots;
export default class DocumentError extends SvelteComponentTyped<DocumentErrorProps, DocumentErrorEvents, DocumentErrorSlots> {
}
export {};
