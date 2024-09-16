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
export type CircleEuroProps = typeof __propDef.props;
export type CircleEuroEvents = typeof __propDef.events;
export type CircleEuroSlots = typeof __propDef.slots;
export default class CircleEuro extends SvelteComponentTyped<CircleEuroProps, CircleEuroEvents, CircleEuroSlots> {
}
export {};
