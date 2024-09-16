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
export type FishingProps = typeof __propDef.props;
export type FishingEvents = typeof __propDef.events;
export type FishingSlots = typeof __propDef.slots;
export default class Fishing extends SvelteComponentTyped<FishingProps, FishingEvents, FishingSlots> {
}
export {};
