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
export type CircleForwardFillProps = typeof __propDef.props;
export type CircleForwardFillEvents = typeof __propDef.events;
export type CircleForwardFillSlots = typeof __propDef.slots;
export default class CircleForwardFill extends SvelteComponentTyped<CircleForwardFillProps, CircleForwardFillEvents, CircleForwardFillSlots> {
}
export {};
