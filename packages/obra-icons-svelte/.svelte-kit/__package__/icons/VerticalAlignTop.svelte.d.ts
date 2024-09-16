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
export type VerticalAlignTopProps = typeof __propDef.props;
export type VerticalAlignTopEvents = typeof __propDef.events;
export type VerticalAlignTopSlots = typeof __propDef.slots;
export default class VerticalAlignTop extends SvelteComponentTyped<VerticalAlignTopProps, VerticalAlignTopEvents, VerticalAlignTopSlots> {
}
export {};
