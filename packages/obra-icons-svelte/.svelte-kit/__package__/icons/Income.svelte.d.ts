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
export type IncomeProps = typeof __propDef.props;
export type IncomeEvents = typeof __propDef.events;
export type IncomeSlots = typeof __propDef.slots;
export default class Income extends SvelteComponentTyped<IncomeProps, IncomeEvents, IncomeSlots> {
}
export {};
