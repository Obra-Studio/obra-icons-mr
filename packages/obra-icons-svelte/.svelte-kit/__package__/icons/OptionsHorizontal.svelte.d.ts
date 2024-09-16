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
export type OptionsHorizontalProps = typeof __propDef.props;
export type OptionsHorizontalEvents = typeof __propDef.events;
export type OptionsHorizontalSlots = typeof __propDef.slots;
export default class OptionsHorizontal extends SvelteComponentTyped<OptionsHorizontalProps, OptionsHorizontalEvents, OptionsHorizontalSlots> {
}
export {};
