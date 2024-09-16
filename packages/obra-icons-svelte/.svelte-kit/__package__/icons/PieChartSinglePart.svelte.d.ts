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
export type PieChartSinglePartProps = typeof __propDef.props;
export type PieChartSinglePartEvents = typeof __propDef.events;
export type PieChartSinglePartSlots = typeof __propDef.slots;
export default class PieChartSinglePart extends SvelteComponentTyped<PieChartSinglePartProps, PieChartSinglePartEvents, PieChartSinglePartSlots> {
}
export {};
