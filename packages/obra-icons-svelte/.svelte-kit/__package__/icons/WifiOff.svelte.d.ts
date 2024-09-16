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
export type WifiOffProps = typeof __propDef.props;
export type WifiOffEvents = typeof __propDef.events;
export type WifiOffSlots = typeof __propDef.slots;
export default class WifiOff extends SvelteComponentTyped<WifiOffProps, WifiOffEvents, WifiOffSlots> {
}
export {};
