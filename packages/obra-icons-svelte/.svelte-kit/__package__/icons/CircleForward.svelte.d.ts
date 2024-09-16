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
export type CircleForwardProps = typeof __propDef.props;
export type CircleForwardEvents = typeof __propDef.events;
export type CircleForwardSlots = typeof __propDef.slots;
export default class CircleForward extends SvelteComponentTyped<CircleForwardProps, CircleForwardEvents, CircleForwardSlots> {
}
export {};
