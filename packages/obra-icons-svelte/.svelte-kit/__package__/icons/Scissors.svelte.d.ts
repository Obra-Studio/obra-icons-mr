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
export type ScissorsProps = typeof __propDef.props;
export type ScissorsEvents = typeof __propDef.events;
export type ScissorsSlots = typeof __propDef.slots;
export default class Scissors extends SvelteComponentTyped<ScissorsProps, ScissorsEvents, ScissorsSlots> {
}
export {};
