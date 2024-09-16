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
export type PinAlt2FillProps = typeof __propDef.props;
export type PinAlt2FillEvents = typeof __propDef.events;
export type PinAlt2FillSlots = typeof __propDef.slots;
export default class PinAlt2Fill extends SvelteComponentTyped<PinAlt2FillProps, PinAlt2FillEvents, PinAlt2FillSlots> {
}
export {};
