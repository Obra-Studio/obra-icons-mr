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
export type EggCrackedProps = typeof __propDef.props;
export type EggCrackedEvents = typeof __propDef.events;
export type EggCrackedSlots = typeof __propDef.slots;
export default class EggCracked extends SvelteComponentTyped<EggCrackedProps, EggCrackedEvents, EggCrackedSlots> {
}
export {};
