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
export type PinFillProps = typeof __propDef.props;
export type PinFillEvents = typeof __propDef.events;
export type PinFillSlots = typeof __propDef.slots;
export default class PinFill extends SvelteComponentTyped<PinFillProps, PinFillEvents, PinFillSlots> {
}
export {};
