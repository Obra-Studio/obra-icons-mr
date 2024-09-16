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
export type AugmentedRealityProps = typeof __propDef.props;
export type AugmentedRealityEvents = typeof __propDef.events;
export type AugmentedRealitySlots = typeof __propDef.slots;
export default class AugmentedReality extends SvelteComponentTyped<AugmentedRealityProps, AugmentedRealityEvents, AugmentedRealitySlots> {
}
export {};
