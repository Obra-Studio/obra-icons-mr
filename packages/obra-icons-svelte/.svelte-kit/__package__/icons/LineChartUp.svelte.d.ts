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
export type LineChartUpProps = typeof __propDef.props;
export type LineChartUpEvents = typeof __propDef.events;
export type LineChartUpSlots = typeof __propDef.slots;
export default class LineChartUp extends SvelteComponentTyped<LineChartUpProps, LineChartUpEvents, LineChartUpSlots> {
}
export {};
