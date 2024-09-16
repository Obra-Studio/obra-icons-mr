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
export type WrenchProps = typeof __propDef.props;
export type WrenchEvents = typeof __propDef.events;
export type WrenchSlots = typeof __propDef.slots;
export default class Wrench extends SvelteComponentTyped<WrenchProps, WrenchEvents, WrenchSlots> {
}
export {};
