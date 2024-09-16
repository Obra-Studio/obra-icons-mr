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
export type PlaneProps = typeof __propDef.props;
export type PlaneEvents = typeof __propDef.events;
export type PlaneSlots = typeof __propDef.slots;
export default class Plane extends SvelteComponentTyped<PlaneProps, PlaneEvents, PlaneSlots> {
}
export {};
