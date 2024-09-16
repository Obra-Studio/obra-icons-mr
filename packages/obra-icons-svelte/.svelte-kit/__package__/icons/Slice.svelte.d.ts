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
export type SliceProps = typeof __propDef.props;
export type SliceEvents = typeof __propDef.events;
export type SliceSlots = typeof __propDef.slots;
export default class Slice extends SvelteComponentTyped<SliceProps, SliceEvents, SliceSlots> {
}
export {};
