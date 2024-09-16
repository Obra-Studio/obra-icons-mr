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
export type DocumentErrorFillProps = typeof __propDef.props;
export type DocumentErrorFillEvents = typeof __propDef.events;
export type DocumentErrorFillSlots = typeof __propDef.slots;
export default class DocumentErrorFill extends SvelteComponentTyped<DocumentErrorFillProps, DocumentErrorFillEvents, DocumentErrorFillSlots> {
}
export {};
