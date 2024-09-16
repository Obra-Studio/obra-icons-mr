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
export type GobletProps = typeof __propDef.props;
export type GobletEvents = typeof __propDef.events;
export type GobletSlots = typeof __propDef.slots;
export default class Goblet extends SvelteComponentTyped<GobletProps, GobletEvents, GobletSlots> {
}
export {};
