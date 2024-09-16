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
export type CellSignalHighProps = typeof __propDef.props;
export type CellSignalHighEvents = typeof __propDef.events;
export type CellSignalHighSlots = typeof __propDef.slots;
export default class CellSignalHigh extends SvelteComponentTyped<CellSignalHighProps, CellSignalHighEvents, CellSignalHighSlots> {
}
export {};
