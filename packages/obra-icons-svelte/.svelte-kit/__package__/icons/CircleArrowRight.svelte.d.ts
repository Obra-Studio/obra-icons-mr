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
export type CircleArrowRightProps = typeof __propDef.props;
export type CircleArrowRightEvents = typeof __propDef.events;
export type CircleArrowRightSlots = typeof __propDef.slots;
export default class CircleArrowRight extends SvelteComponentTyped<CircleArrowRightProps, CircleArrowRightEvents, CircleArrowRightSlots> {
}
export {};
