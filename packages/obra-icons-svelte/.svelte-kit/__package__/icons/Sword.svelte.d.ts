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
export type SwordProps = typeof __propDef.props;
export type SwordEvents = typeof __propDef.events;
export type SwordSlots = typeof __propDef.slots;
export default class Sword extends SvelteComponentTyped<SwordProps, SwordEvents, SwordSlots> {
}
export {};
