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
export type TruckAltFillProps = typeof __propDef.props;
export type TruckAltFillEvents = typeof __propDef.events;
export type TruckAltFillSlots = typeof __propDef.slots;
export default class TruckAltFill extends SvelteComponentTyped<TruckAltFillProps, TruckAltFillEvents, TruckAltFillSlots> {
}
export {};
