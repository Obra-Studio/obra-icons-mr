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
export type ChartScatterProps = typeof __propDef.props;
export type ChartScatterEvents = typeof __propDef.events;
export type ChartScatterSlots = typeof __propDef.slots;
export default class ChartScatter extends SvelteComponentTyped<ChartScatterProps, ChartScatterEvents, ChartScatterSlots> {
}
export {};
