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
export type DocumentAddFillProps = typeof __propDef.props;
export type DocumentAddFillEvents = typeof __propDef.events;
export type DocumentAddFillSlots = typeof __propDef.slots;
export default class DocumentAddFill extends SvelteComponentTyped<DocumentAddFillProps, DocumentAddFillEvents, DocumentAddFillSlots> {
}
export {};
