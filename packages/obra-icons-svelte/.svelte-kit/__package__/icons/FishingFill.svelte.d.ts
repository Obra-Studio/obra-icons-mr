import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FishingFillProps = typeof __propDef.props;
export type FishingFillEvents = typeof __propDef.events;
export type FishingFillSlots = typeof __propDef.slots;
export default class FishingFill extends SvelteComponentTyped<FishingFillProps, FishingFillEvents, FishingFillSlots> {
}
export {};
