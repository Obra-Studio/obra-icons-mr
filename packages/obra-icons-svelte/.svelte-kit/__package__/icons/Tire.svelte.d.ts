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
export type TireProps = typeof __propDef.props;
export type TireEvents = typeof __propDef.events;
export type TireSlots = typeof __propDef.slots;
export default class Tire extends SvelteComponentTyped<TireProps, TireEvents, TireSlots> {
}
export {};
