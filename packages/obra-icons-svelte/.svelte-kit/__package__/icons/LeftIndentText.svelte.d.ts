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
export type LeftIndentTextProps = typeof __propDef.props;
export type LeftIndentTextEvents = typeof __propDef.events;
export type LeftIndentTextSlots = typeof __propDef.slots;
export default class LeftIndentText extends SvelteComponentTyped<LeftIndentTextProps, LeftIndentTextEvents, LeftIndentTextSlots> {
}
export {};
