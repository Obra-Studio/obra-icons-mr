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
export type DocumentCodeFillProps = typeof __propDef.props;
export type DocumentCodeFillEvents = typeof __propDef.events;
export type DocumentCodeFillSlots = typeof __propDef.slots;
export default class DocumentCodeFill extends SvelteComponentTyped<DocumentCodeFillProps, DocumentCodeFillEvents, DocumentCodeFillSlots> {
}
export {};
