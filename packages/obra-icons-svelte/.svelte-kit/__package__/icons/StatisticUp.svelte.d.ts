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
export type StatisticUpProps = typeof __propDef.props;
export type StatisticUpEvents = typeof __propDef.events;
export type StatisticUpSlots = typeof __propDef.slots;
export default class StatisticUp extends SvelteComponentTyped<StatisticUpProps, StatisticUpEvents, StatisticUpSlots> {
}
export {};
