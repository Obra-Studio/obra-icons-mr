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
export type OptionsVerticalEncircledProps = typeof __propDef.props;
export type OptionsVerticalEncircledEvents = typeof __propDef.events;
export type OptionsVerticalEncircledSlots = typeof __propDef.slots;
export default class OptionsVerticalEncircled extends SvelteComponentTyped<OptionsVerticalEncircledProps, OptionsVerticalEncircledEvents, OptionsVerticalEncircledSlots> {
}
export {};
