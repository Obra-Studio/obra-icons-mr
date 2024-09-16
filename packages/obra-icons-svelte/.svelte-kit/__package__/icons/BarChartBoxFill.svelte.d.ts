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
export type BarChartBoxFillProps = typeof __propDef.props;
export type BarChartBoxFillEvents = typeof __propDef.events;
export type BarChartBoxFillSlots = typeof __propDef.slots;
export default class BarChartBoxFill extends SvelteComponentTyped<BarChartBoxFillProps, BarChartBoxFillEvents, BarChartBoxFillSlots> {
}
export {};
