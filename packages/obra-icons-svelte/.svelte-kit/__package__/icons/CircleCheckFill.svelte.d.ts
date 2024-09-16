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
export type CircleCheckFillProps = typeof __propDef.props;
export type CircleCheckFillEvents = typeof __propDef.events;
export type CircleCheckFillSlots = typeof __propDef.slots;
export default class CircleCheckFill extends SvelteComponentTyped<CircleCheckFillProps, CircleCheckFillEvents, CircleCheckFillSlots> {
}
export {};
