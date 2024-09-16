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
export type CellSignalMediumProps = typeof __propDef.props;
export type CellSignalMediumEvents = typeof __propDef.events;
export type CellSignalMediumSlots = typeof __propDef.slots;
export default class CellSignalMedium extends SvelteComponentTyped<CellSignalMediumProps, CellSignalMediumEvents, CellSignalMediumSlots> {
}
export {};
