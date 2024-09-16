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
export type MarriageRingProps = typeof __propDef.props;
export type MarriageRingEvents = typeof __propDef.events;
export type MarriageRingSlots = typeof __propDef.slots;
export default class MarriageRing extends SvelteComponentTyped<MarriageRingProps, MarriageRingEvents, MarriageRingSlots> {
}
export {};
