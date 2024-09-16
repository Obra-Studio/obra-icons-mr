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
export type SavingsProps = typeof __propDef.props;
export type SavingsEvents = typeof __propDef.events;
export type SavingsSlots = typeof __propDef.slots;
export default class Savings extends SvelteComponentTyped<SavingsProps, SavingsEvents, SavingsSlots> {
}
export {};
