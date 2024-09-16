import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type RewindStartFillProps = typeof __propDef.props;
export type RewindStartFillEvents = typeof __propDef.events;
export type RewindStartFillSlots = typeof __propDef.slots;
export default class RewindStartFill extends SvelteComponentTyped<RewindStartFillProps, RewindStartFillEvents, RewindStartFillSlots> {
}
export {};
