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
export type BarChartBoxProps = typeof __propDef.props;
export type BarChartBoxEvents = typeof __propDef.events;
export type BarChartBoxSlots = typeof __propDef.slots;
export default class BarChartBox extends SvelteComponentTyped<BarChartBoxProps, BarChartBoxEvents, BarChartBoxSlots> {
}
export {};
