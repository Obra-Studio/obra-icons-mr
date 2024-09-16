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
export type OrangeSliceProps = typeof __propDef.props;
export type OrangeSliceEvents = typeof __propDef.events;
export type OrangeSliceSlots = typeof __propDef.slots;
export default class OrangeSlice extends SvelteComponentTyped<OrangeSliceProps, OrangeSliceEvents, OrangeSliceSlots> {
}
export {};
