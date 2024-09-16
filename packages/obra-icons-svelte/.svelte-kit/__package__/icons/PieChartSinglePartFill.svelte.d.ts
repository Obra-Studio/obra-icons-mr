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
export type PieChartSinglePartFillProps = typeof __propDef.props;
export type PieChartSinglePartFillEvents = typeof __propDef.events;
export type PieChartSinglePartFillSlots = typeof __propDef.slots;
export default class PieChartSinglePartFill extends SvelteComponentTyped<PieChartSinglePartFillProps, PieChartSinglePartFillEvents, PieChartSinglePartFillSlots> {
}
export {};
