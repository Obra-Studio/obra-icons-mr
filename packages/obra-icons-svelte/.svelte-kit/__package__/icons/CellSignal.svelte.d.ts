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
export type CellSignalProps = typeof __propDef.props;
export type CellSignalEvents = typeof __propDef.events;
export type CellSignalSlots = typeof __propDef.slots;
export default class CellSignal extends SvelteComponentTyped<CellSignalProps, CellSignalEvents, CellSignalSlots> {
}
export {};
