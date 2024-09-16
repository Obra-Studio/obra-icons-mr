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
export type PowerOffProps = typeof __propDef.props;
export type PowerOffEvents = typeof __propDef.events;
export type PowerOffSlots = typeof __propDef.slots;
export default class PowerOff extends SvelteComponentTyped<PowerOffProps, PowerOffEvents, PowerOffSlots> {
}
export {};
