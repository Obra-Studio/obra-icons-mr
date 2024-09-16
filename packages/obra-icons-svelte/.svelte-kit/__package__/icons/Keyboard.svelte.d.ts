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
export type KeyboardProps = typeof __propDef.props;
export type KeyboardEvents = typeof __propDef.events;
export type KeyboardSlots = typeof __propDef.slots;
export default class Keyboard extends SvelteComponentTyped<KeyboardProps, KeyboardEvents, KeyboardSlots> {
}
export {};
