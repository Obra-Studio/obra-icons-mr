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
export type PenAltFillProps = typeof __propDef.props;
export type PenAltFillEvents = typeof __propDef.events;
export type PenAltFillSlots = typeof __propDef.slots;
export default class PenAltFill extends SvelteComponentTyped<PenAltFillProps, PenAltFillEvents, PenAltFillSlots> {
}
export {};
