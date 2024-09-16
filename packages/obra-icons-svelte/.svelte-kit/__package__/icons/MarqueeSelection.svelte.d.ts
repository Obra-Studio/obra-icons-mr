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
export type MarqueeSelectionProps = typeof __propDef.props;
export type MarqueeSelectionEvents = typeof __propDef.events;
export type MarqueeSelectionSlots = typeof __propDef.slots;
export default class MarqueeSelection extends SvelteComponentTyped<MarqueeSelectionProps, MarqueeSelectionEvents, MarqueeSelectionSlots> {
}
export {};
