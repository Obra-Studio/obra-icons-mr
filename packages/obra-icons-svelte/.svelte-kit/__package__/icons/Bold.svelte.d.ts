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
export type BoldProps = typeof __propDef.props;
export type BoldEvents = typeof __propDef.events;
export type BoldSlots = typeof __propDef.slots;
export default class Bold extends SvelteComponentTyped<BoldProps, BoldEvents, BoldSlots> {
}
export {};
