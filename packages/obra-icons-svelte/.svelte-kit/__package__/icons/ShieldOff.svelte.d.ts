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
export type ShieldOffProps = typeof __propDef.props;
export type ShieldOffEvents = typeof __propDef.events;
export type ShieldOffSlots = typeof __propDef.slots;
export default class ShieldOff extends SvelteComponentTyped<ShieldOffProps, ShieldOffEvents, ShieldOffSlots> {
}
export {};
