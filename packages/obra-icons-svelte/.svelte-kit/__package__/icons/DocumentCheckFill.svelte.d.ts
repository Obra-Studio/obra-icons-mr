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
export type DocumentCheckFillProps = typeof __propDef.props;
export type DocumentCheckFillEvents = typeof __propDef.events;
export type DocumentCheckFillSlots = typeof __propDef.slots;
export default class DocumentCheckFill extends SvelteComponentTyped<DocumentCheckFillProps, DocumentCheckFillEvents, DocumentCheckFillSlots> {
}
export {};
