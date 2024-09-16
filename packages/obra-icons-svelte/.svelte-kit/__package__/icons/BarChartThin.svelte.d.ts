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
export type BarChartThinProps = typeof __propDef.props;
export type BarChartThinEvents = typeof __propDef.events;
export type BarChartThinSlots = typeof __propDef.slots;
export default class BarChartThin extends SvelteComponentTyped<BarChartThinProps, BarChartThinEvents, BarChartThinSlots> {
}
export {};
