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
export type SailboatProps = typeof __propDef.props;
export type SailboatEvents = typeof __propDef.events;
export type SailboatSlots = typeof __propDef.slots;
export default class Sailboat extends SvelteComponentTyped<SailboatProps, SailboatEvents, SailboatSlots> {
}
export {};
