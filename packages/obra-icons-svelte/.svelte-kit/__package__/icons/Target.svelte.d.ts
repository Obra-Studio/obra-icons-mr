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
export type TargetProps = typeof __propDef.props;
export type TargetEvents = typeof __propDef.events;
export type TargetSlots = typeof __propDef.slots;
export default class Target extends SvelteComponentTyped<TargetProps, TargetEvents, TargetSlots> {
}
export {};
