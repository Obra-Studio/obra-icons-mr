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
export type ArrowDownProps = typeof __propDef.props;
export type ArrowDownEvents = typeof __propDef.events;
export type ArrowDownSlots = typeof __propDef.slots;
export default class ArrowDown extends SvelteComponentTyped<ArrowDownProps, ArrowDownEvents, ArrowDownSlots> {
}
export {};
