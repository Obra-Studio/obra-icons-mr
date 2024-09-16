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
export type DamagesProps = typeof __propDef.props;
export type DamagesEvents = typeof __propDef.events;
export type DamagesSlots = typeof __propDef.slots;
export default class Damages extends SvelteComponentTyped<DamagesProps, DamagesEvents, DamagesSlots> {
}
export {};
