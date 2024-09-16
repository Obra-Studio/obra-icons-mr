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
export type StrategyProps = typeof __propDef.props;
export type StrategyEvents = typeof __propDef.events;
export type StrategySlots = typeof __propDef.slots;
export default class Strategy extends SvelteComponentTyped<StrategyProps, StrategyEvents, StrategySlots> {
}
export {};
