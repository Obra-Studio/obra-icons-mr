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
export type BarcodeScanProps = typeof __propDef.props;
export type BarcodeScanEvents = typeof __propDef.events;
export type BarcodeScanSlots = typeof __propDef.slots;
export default class BarcodeScan extends SvelteComponentTyped<BarcodeScanProps, BarcodeScanEvents, BarcodeScanSlots> {
}
export {};
