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
export type LineChartAxesUpProps = typeof __propDef.props;
export type LineChartAxesUpEvents = typeof __propDef.events;
export type LineChartAxesUpSlots = typeof __propDef.slots;
export default class LineChartAxesUp extends SvelteComponentTyped<LineChartAxesUpProps, LineChartAxesUpEvents, LineChartAxesUpSlots> {
}
export {};
