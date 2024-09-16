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
export type ToothProps = typeof __propDef.props;
export type ToothEvents = typeof __propDef.events;
export type ToothSlots = typeof __propDef.slots;
export default class Tooth extends SvelteComponentTyped<ToothProps, ToothEvents, ToothSlots> {
}
export {};
