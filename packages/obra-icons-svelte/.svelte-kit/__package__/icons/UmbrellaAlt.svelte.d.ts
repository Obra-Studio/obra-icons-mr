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
export type UmbrellaAltProps = typeof __propDef.props;
export type UmbrellaAltEvents = typeof __propDef.events;
export type UmbrellaAltSlots = typeof __propDef.slots;
export default class UmbrellaAlt extends SvelteComponentTyped<UmbrellaAltProps, UmbrellaAltEvents, UmbrellaAltSlots> {
}
export {};
