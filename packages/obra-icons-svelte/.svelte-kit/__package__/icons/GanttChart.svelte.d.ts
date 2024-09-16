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
export type GanttChartProps = typeof __propDef.props;
export type GanttChartEvents = typeof __propDef.events;
export type GanttChartSlots = typeof __propDef.slots;
export default class GanttChart extends SvelteComponentTyped<GanttChartProps, GanttChartEvents, GanttChartSlots> {
}
export {};
