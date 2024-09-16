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
export type VerticalAlignMiddleProps = typeof __propDef.props;
export type VerticalAlignMiddleEvents = typeof __propDef.events;
export type VerticalAlignMiddleSlots = typeof __propDef.slots;
export default class VerticalAlignMiddle extends SvelteComponentTyped<VerticalAlignMiddleProps, VerticalAlignMiddleEvents, VerticalAlignMiddleSlots> {
}
export {};
