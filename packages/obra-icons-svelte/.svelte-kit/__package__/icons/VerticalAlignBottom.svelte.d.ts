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
export type VerticalAlignBottomProps = typeof __propDef.props;
export type VerticalAlignBottomEvents = typeof __propDef.events;
export type VerticalAlignBottomSlots = typeof __propDef.slots;
export default class VerticalAlignBottom extends SvelteComponentTyped<VerticalAlignBottomProps, VerticalAlignBottomEvents, VerticalAlignBottomSlots> {
}
export {};
