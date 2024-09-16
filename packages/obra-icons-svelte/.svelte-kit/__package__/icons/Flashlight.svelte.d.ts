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
export type FlashlightProps = typeof __propDef.props;
export type FlashlightEvents = typeof __propDef.events;
export type FlashlightSlots = typeof __propDef.slots;
export default class Flashlight extends SvelteComponentTyped<FlashlightProps, FlashlightEvents, FlashlightSlots> {
}
export {};
