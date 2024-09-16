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
export type GrainProps = typeof __propDef.props;
export type GrainEvents = typeof __propDef.events;
export type GrainSlots = typeof __propDef.slots;
export default class Grain extends SvelteComponentTyped<GrainProps, GrainEvents, GrainSlots> {
}
export {};
