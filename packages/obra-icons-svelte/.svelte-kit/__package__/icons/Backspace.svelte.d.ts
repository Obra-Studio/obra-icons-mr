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
export type BackspaceProps = typeof __propDef.props;
export type BackspaceEvents = typeof __propDef.events;
export type BackspaceSlots = typeof __propDef.slots;
export default class Backspace extends SvelteComponentTyped<BackspaceProps, BackspaceEvents, BackspaceSlots> {
}
export {};
