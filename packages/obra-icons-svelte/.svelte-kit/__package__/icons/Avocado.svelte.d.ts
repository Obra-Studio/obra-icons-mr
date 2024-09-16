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
export type AvocadoProps = typeof __propDef.props;
export type AvocadoEvents = typeof __propDef.events;
export type AvocadoSlots = typeof __propDef.slots;
export default class Avocado extends SvelteComponentTyped<AvocadoProps, AvocadoEvents, AvocadoSlots> {
}
export {};
