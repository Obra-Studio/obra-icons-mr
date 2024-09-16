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
export type FlagProps = typeof __propDef.props;
export type FlagEvents = typeof __propDef.events;
export type FlagSlots = typeof __propDef.slots;
export default class Flag extends SvelteComponentTyped<FlagProps, FlagEvents, FlagSlots> {
}
export {};
