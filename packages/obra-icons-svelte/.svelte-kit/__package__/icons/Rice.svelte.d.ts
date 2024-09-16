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
export type RiceProps = typeof __propDef.props;
export type RiceEvents = typeof __propDef.events;
export type RiceSlots = typeof __propDef.slots;
export default class Rice extends SvelteComponentTyped<RiceProps, RiceEvents, RiceSlots> {
}
export {};
