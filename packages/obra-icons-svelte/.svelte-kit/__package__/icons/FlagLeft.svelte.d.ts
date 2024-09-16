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
export type FlagLeftProps = typeof __propDef.props;
export type FlagLeftEvents = typeof __propDef.events;
export type FlagLeftSlots = typeof __propDef.slots;
export default class FlagLeft extends SvelteComponentTyped<FlagLeftProps, FlagLeftEvents, FlagLeftSlots> {
}
export {};
