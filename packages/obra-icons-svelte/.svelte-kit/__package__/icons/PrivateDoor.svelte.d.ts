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
export type PrivateDoorProps = typeof __propDef.props;
export type PrivateDoorEvents = typeof __propDef.events;
export type PrivateDoorSlots = typeof __propDef.slots;
export default class PrivateDoor extends SvelteComponentTyped<PrivateDoorProps, PrivateDoorEvents, PrivateDoorSlots> {
}
export {};
