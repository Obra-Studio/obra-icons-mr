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
export type EggProps = typeof __propDef.props;
export type EggEvents = typeof __propDef.events;
export type EggSlots = typeof __propDef.slots;
export default class Egg extends SvelteComponentTyped<EggProps, EggEvents, EggSlots> {
}
export {};
