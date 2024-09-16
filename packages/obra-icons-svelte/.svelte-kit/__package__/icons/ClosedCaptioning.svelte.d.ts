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
export type ClosedCaptioningProps = typeof __propDef.props;
export type ClosedCaptioningEvents = typeof __propDef.events;
export type ClosedCaptioningSlots = typeof __propDef.slots;
export default class ClosedCaptioning extends SvelteComponentTyped<ClosedCaptioningProps, ClosedCaptioningEvents, ClosedCaptioningSlots> {
}
export {};
