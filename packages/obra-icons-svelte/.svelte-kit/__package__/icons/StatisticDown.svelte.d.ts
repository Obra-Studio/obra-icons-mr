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
export type StatisticDownProps = typeof __propDef.props;
export type StatisticDownEvents = typeof __propDef.events;
export type StatisticDownSlots = typeof __propDef.slots;
export default class StatisticDown extends SvelteComponentTyped<StatisticDownProps, StatisticDownEvents, StatisticDownSlots> {
}
export {};
