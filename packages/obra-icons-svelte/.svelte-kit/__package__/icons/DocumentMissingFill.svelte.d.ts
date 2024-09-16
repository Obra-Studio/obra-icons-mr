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
export type DocumentMissingFillProps = typeof __propDef.props;
export type DocumentMissingFillEvents = typeof __propDef.events;
export type DocumentMissingFillSlots = typeof __propDef.slots;
export default class DocumentMissingFill extends SvelteComponentTyped<DocumentMissingFillProps, DocumentMissingFillEvents, DocumentMissingFillSlots> {
}
export {};
