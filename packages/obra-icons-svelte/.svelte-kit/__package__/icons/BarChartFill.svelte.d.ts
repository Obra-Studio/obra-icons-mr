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
export type BarChartFillProps = typeof __propDef.props;
export type BarChartFillEvents = typeof __propDef.events;
export type BarChartFillSlots = typeof __propDef.slots;
export default class BarChartFill extends SvelteComponentTyped<BarChartFillProps, BarChartFillEvents, BarChartFillSlots> {
}
export {};
