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
export type LineChartFillProps = typeof __propDef.props;
export type LineChartFillEvents = typeof __propDef.events;
export type LineChartFillSlots = typeof __propDef.slots;
export default class LineChartFill extends SvelteComponentTyped<LineChartFillProps, LineChartFillEvents, LineChartFillSlots> {
}
export {};
