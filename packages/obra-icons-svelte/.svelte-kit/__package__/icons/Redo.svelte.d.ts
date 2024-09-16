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
export type RedoProps = typeof __propDef.props;
export type RedoEvents = typeof __propDef.events;
export type RedoSlots = typeof __propDef.slots;
export default class Redo extends SvelteComponentTyped<RedoProps, RedoEvents, RedoSlots> {
}
export {};
