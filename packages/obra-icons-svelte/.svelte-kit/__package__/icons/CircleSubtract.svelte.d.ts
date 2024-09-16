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
export type CircleSubtractProps = typeof __propDef.props;
export type CircleSubtractEvents = typeof __propDef.events;
export type CircleSubtractSlots = typeof __propDef.slots;
export default class CircleSubtract extends SvelteComponentTyped<CircleSubtractProps, CircleSubtractEvents, CircleSubtractSlots> {
}
export {};
