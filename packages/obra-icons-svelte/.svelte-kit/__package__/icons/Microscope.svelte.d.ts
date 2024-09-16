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
export type MicroscopeProps = typeof __propDef.props;
export type MicroscopeEvents = typeof __propDef.events;
export type MicroscopeSlots = typeof __propDef.slots;
export default class Microscope extends SvelteComponentTyped<MicroscopeProps, MicroscopeEvents, MicroscopeSlots> {
}
export {};
