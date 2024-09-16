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
export type FastForwardEndProps = typeof __propDef.props;
export type FastForwardEndEvents = typeof __propDef.events;
export type FastForwardEndSlots = typeof __propDef.slots;
export default class FastForwardEnd extends SvelteComponentTyped<FastForwardEndProps, FastForwardEndEvents, FastForwardEndSlots> {
}
export {};
