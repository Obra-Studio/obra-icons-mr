import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EyedropperFillProps = typeof __propDef.props;
export type EyedropperFillEvents = typeof __propDef.events;
export type EyedropperFillSlots = typeof __propDef.slots;
export default class EyedropperFill extends SvelteComponentTyped<EyedropperFillProps, EyedropperFillEvents, EyedropperFillSlots> {
}
export {};
