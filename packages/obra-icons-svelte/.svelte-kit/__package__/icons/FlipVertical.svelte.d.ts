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
export type FlipVerticalProps = typeof __propDef.props;
export type FlipVerticalEvents = typeof __propDef.events;
export type FlipVerticalSlots = typeof __propDef.slots;
export default class FlipVertical extends SvelteComponentTyped<FlipVerticalProps, FlipVerticalEvents, FlipVerticalSlots> {
}
export {};
