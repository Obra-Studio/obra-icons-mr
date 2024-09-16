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
export type PuppyProps = typeof __propDef.props;
export type PuppyEvents = typeof __propDef.events;
export type PuppySlots = typeof __propDef.slots;
export default class Puppy extends SvelteComponentTyped<PuppyProps, PuppyEvents, PuppySlots> {
}
export {};
