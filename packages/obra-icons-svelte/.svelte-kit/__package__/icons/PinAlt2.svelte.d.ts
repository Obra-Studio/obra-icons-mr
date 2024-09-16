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
export type PinAlt2Props = typeof __propDef.props;
export type PinAlt2Events = typeof __propDef.events;
export type PinAlt2Slots = typeof __propDef.slots;
export default class PinAlt2 extends SvelteComponentTyped<PinAlt2Props, PinAlt2Events, PinAlt2Slots> {
}
export {};
