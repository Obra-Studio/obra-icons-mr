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
export type LineChartDownProps = typeof __propDef.props;
export type LineChartDownEvents = typeof __propDef.events;
export type LineChartDownSlots = typeof __propDef.slots;
export default class LineChartDown extends SvelteComponentTyped<LineChartDownProps, LineChartDownEvents, LineChartDownSlots> {
}
export {};
