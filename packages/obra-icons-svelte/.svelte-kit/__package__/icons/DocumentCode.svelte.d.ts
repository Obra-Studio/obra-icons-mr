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
export type DocumentCodeProps = typeof __propDef.props;
export type DocumentCodeEvents = typeof __propDef.events;
export type DocumentCodeSlots = typeof __propDef.slots;
export default class DocumentCode extends SvelteComponentTyped<DocumentCodeProps, DocumentCodeEvents, DocumentCodeSlots> {
}
export {};
