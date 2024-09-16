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
export type DocumentAltFillProps = typeof __propDef.props;
export type DocumentAltFillEvents = typeof __propDef.events;
export type DocumentAltFillSlots = typeof __propDef.slots;
export default class DocumentAltFill extends SvelteComponentTyped<DocumentAltFillProps, DocumentAltFillEvents, DocumentAltFillSlots> {
}
export {};
