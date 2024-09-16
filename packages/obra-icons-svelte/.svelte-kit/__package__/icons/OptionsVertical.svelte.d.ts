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
export type OptionsVerticalProps = typeof __propDef.props;
export type OptionsVerticalEvents = typeof __propDef.events;
export type OptionsVerticalSlots = typeof __propDef.slots;
export default class OptionsVertical extends SvelteComponentTyped<OptionsVerticalProps, OptionsVerticalEvents, OptionsVerticalSlots> {
}
export {};
