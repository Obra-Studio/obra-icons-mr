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
export type LineChartAxesDownProps = typeof __propDef.props;
export type LineChartAxesDownEvents = typeof __propDef.events;
export type LineChartAxesDownSlots = typeof __propDef.slots;
export default class LineChartAxesDown extends SvelteComponentTyped<LineChartAxesDownProps, LineChartAxesDownEvents, LineChartAxesDownSlots> {
}
export {};
