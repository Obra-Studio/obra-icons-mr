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
export type BoltProps = typeof __propDef.props;
export type BoltEvents = typeof __propDef.events;
export type BoltSlots = typeof __propDef.slots;
export default class Bolt extends SvelteComponentTyped<BoltProps, BoltEvents, BoltSlots> {
}
export {};
