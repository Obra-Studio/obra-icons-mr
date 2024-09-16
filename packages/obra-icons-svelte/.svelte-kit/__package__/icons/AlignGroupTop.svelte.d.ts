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
export type AlignGroupTopProps = typeof __propDef.props;
export type AlignGroupTopEvents = typeof __propDef.events;
export type AlignGroupTopSlots = typeof __propDef.slots;
export default class AlignGroupTop extends SvelteComponentTyped<AlignGroupTopProps, AlignGroupTopEvents, AlignGroupTopSlots> {
}
export {};
