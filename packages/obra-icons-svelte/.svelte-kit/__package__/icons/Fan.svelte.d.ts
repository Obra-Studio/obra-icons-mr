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
export type FanProps = typeof __propDef.props;
export type FanEvents = typeof __propDef.events;
export type FanSlots = typeof __propDef.slots;
export default class Fan extends SvelteComponentTyped<FanProps, FanEvents, FanSlots> {
}
export {};
