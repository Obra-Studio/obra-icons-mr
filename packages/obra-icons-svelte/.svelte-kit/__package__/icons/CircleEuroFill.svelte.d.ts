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
export type CircleEuroFillProps = typeof __propDef.props;
export type CircleEuroFillEvents = typeof __propDef.events;
export type CircleEuroFillSlots = typeof __propDef.slots;
export default class CircleEuroFill extends SvelteComponentTyped<CircleEuroFillProps, CircleEuroFillEvents, CircleEuroFillSlots> {
}
export {};
