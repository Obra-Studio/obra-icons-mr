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
export type FishProps = typeof __propDef.props;
export type FishEvents = typeof __propDef.events;
export type FishSlots = typeof __propDef.slots;
export default class Fish extends SvelteComponentTyped<FishProps, FishEvents, FishSlots> {
}
export {};
