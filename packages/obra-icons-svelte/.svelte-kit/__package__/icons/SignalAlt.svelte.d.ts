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
export type SignalAltProps = typeof __propDef.props;
export type SignalAltEvents = typeof __propDef.events;
export type SignalAltSlots = typeof __propDef.slots;
export default class SignalAlt extends SvelteComponentTyped<SignalAltProps, SignalAltEvents, SignalAltSlots> {
}
export {};
