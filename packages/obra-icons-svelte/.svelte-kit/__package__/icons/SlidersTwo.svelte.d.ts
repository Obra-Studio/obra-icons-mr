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
export type SlidersTwoProps = typeof __propDef.props;
export type SlidersTwoEvents = typeof __propDef.events;
export type SlidersTwoSlots = typeof __propDef.slots;
export default class SlidersTwo extends SvelteComponentTyped<SlidersTwoProps, SlidersTwoEvents, SlidersTwoSlots> {
}
export {};
