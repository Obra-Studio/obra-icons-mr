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
export type DocumentRemoveFillProps = typeof __propDef.props;
export type DocumentRemoveFillEvents = typeof __propDef.events;
export type DocumentRemoveFillSlots = typeof __propDef.slots;
export default class DocumentRemoveFill extends SvelteComponentTyped<DocumentRemoveFillProps, DocumentRemoveFillEvents, DocumentRemoveFillSlots> {
}
export {};
