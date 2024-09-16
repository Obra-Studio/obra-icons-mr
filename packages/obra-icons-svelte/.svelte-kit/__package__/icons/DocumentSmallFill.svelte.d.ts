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
export type DocumentSmallFillProps = typeof __propDef.props;
export type DocumentSmallFillEvents = typeof __propDef.events;
export type DocumentSmallFillSlots = typeof __propDef.slots;
export default class DocumentSmallFill extends SvelteComponentTyped<DocumentSmallFillProps, DocumentSmallFillEvents, DocumentSmallFillSlots> {
}
export {};
