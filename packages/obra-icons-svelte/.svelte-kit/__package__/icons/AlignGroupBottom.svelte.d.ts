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
export type AlignGroupBottomProps = typeof __propDef.props;
export type AlignGroupBottomEvents = typeof __propDef.events;
export type AlignGroupBottomSlots = typeof __propDef.slots;
export default class AlignGroupBottom extends SvelteComponentTyped<AlignGroupBottomProps, AlignGroupBottomEvents, AlignGroupBottomSlots> {
}
export {};
