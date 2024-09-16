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
export type CrosshairProps = typeof __propDef.props;
export type CrosshairEvents = typeof __propDef.events;
export type CrosshairSlots = typeof __propDef.slots;
export default class Crosshair extends SvelteComponentTyped<CrosshairProps, CrosshairEvents, CrosshairSlots> {
}
export {};
