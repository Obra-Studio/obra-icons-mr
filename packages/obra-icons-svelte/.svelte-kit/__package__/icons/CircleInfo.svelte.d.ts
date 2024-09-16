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
export type CircleInfoProps = typeof __propDef.props;
export type CircleInfoEvents = typeof __propDef.events;
export type CircleInfoSlots = typeof __propDef.slots;
export default class CircleInfo extends SvelteComponentTyped<CircleInfoProps, CircleInfoEvents, CircleInfoSlots> {
}
export {};
