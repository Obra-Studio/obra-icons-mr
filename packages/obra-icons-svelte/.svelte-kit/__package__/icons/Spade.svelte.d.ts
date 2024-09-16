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
export type SpadeProps = typeof __propDef.props;
export type SpadeEvents = typeof __propDef.events;
export type SpadeSlots = typeof __propDef.slots;
export default class Spade extends SvelteComponentTyped<SpadeProps, SpadeEvents, SpadeSlots> {
}
export {};
