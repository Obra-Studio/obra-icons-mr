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
export type BrocolliProps = typeof __propDef.props;
export type BrocolliEvents = typeof __propDef.events;
export type BrocolliSlots = typeof __propDef.slots;
export default class Brocolli extends SvelteComponentTyped<BrocolliProps, BrocolliEvents, BrocolliSlots> {
}
export {};
