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
export type OptionsHorizontalEncircledProps = typeof __propDef.props;
export type OptionsHorizontalEncircledEvents = typeof __propDef.events;
export type OptionsHorizontalEncircledSlots = typeof __propDef.slots;
export default class OptionsHorizontalEncircled extends SvelteComponentTyped<OptionsHorizontalEncircledProps, OptionsHorizontalEncircledEvents, OptionsHorizontalEncircledSlots> {
}
export {};
