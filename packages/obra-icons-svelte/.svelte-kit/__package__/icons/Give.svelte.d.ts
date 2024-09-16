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
export type GiveProps = typeof __propDef.props;
export type GiveEvents = typeof __propDef.events;
export type GiveSlots = typeof __propDef.slots;
export default class Give extends SvelteComponentTyped<GiveProps, GiveEvents, GiveSlots> {
}
export {};
