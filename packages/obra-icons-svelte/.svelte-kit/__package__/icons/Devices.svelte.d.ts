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
export type DevicesProps = typeof __propDef.props;
export type DevicesEvents = typeof __propDef.events;
export type DevicesSlots = typeof __propDef.slots;
export default class Devices extends SvelteComponentTyped<DevicesProps, DevicesEvents, DevicesSlots> {
}
export {};
