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
export type StatisticFlatProps = typeof __propDef.props;
export type StatisticFlatEvents = typeof __propDef.events;
export type StatisticFlatSlots = typeof __propDef.slots;
export default class StatisticFlat extends SvelteComponentTyped<StatisticFlatProps, StatisticFlatEvents, StatisticFlatSlots> {
}
export {};
