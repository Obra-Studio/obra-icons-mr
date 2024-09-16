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
export type PieChartSinglePartFilledProps = typeof __propDef.props;
export type PieChartSinglePartFilledEvents = typeof __propDef.events;
export type PieChartSinglePartFilledSlots = typeof __propDef.slots;
export default class PieChartSinglePartFilled extends SvelteComponentTyped<PieChartSinglePartFilledProps, PieChartSinglePartFilledEvents, PieChartSinglePartFilledSlots> {
}
export {};
