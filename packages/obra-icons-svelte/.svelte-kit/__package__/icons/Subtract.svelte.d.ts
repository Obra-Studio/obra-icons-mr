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
export type SubtractProps = typeof __propDef.props;
export type SubtractEvents = typeof __propDef.events;
export type SubtractSlots = typeof __propDef.slots;
export default class Subtract extends SvelteComponentTyped<SubtractProps, SubtractEvents, SubtractSlots> {
}
export {};
