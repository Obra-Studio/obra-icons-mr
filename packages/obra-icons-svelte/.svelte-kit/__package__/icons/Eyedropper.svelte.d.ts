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
export type EyedropperProps = typeof __propDef.props;
export type EyedropperEvents = typeof __propDef.events;
export type EyedropperSlots = typeof __propDef.slots;
export default class Eyedropper extends SvelteComponentTyped<EyedropperProps, EyedropperEvents, EyedropperSlots> {
}
export {};
