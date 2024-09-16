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
export type VanProps = typeof __propDef.props;
export type VanEvents = typeof __propDef.events;
export type VanSlots = typeof __propDef.slots;
export default class Van extends SvelteComponentTyped<VanProps, VanEvents, VanSlots> {
}
export {};
