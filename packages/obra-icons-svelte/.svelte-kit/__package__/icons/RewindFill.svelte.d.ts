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
export type RewindFillProps = typeof __propDef.props;
export type RewindFillEvents = typeof __propDef.events;
export type RewindFillSlots = typeof __propDef.slots;
export default class RewindFill extends SvelteComponentTyped<RewindFillProps, RewindFillEvents, RewindFillSlots> {
}
export {};
