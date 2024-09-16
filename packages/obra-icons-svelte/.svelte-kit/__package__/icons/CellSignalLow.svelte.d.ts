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
export type CellSignalLowProps = typeof __propDef.props;
export type CellSignalLowEvents = typeof __propDef.events;
export type CellSignalLowSlots = typeof __propDef.slots;
export default class CellSignalLow extends SvelteComponentTyped<CellSignalLowProps, CellSignalLowEvents, CellSignalLowSlots> {
}
export {};
