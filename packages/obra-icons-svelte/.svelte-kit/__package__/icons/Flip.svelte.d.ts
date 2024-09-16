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
export type FlipProps = typeof __propDef.props;
export type FlipEvents = typeof __propDef.events;
export type FlipSlots = typeof __propDef.slots;
export default class Flip extends SvelteComponentTyped<FlipProps, FlipEvents, FlipSlots> {
}
export {};
