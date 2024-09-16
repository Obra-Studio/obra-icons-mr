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
export type RightIndentTextProps = typeof __propDef.props;
export type RightIndentTextEvents = typeof __propDef.events;
export type RightIndentTextSlots = typeof __propDef.slots;
export default class RightIndentText extends SvelteComponentTyped<RightIndentTextProps, RightIndentTextEvents, RightIndentTextSlots> {
}
export {};
