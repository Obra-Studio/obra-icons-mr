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
export type TableAltProps = typeof __propDef.props;
export type TableAltEvents = typeof __propDef.events;
export type TableAltSlots = typeof __propDef.slots;
export default class TableAlt extends SvelteComponentTyped<TableAltProps, TableAltEvents, TableAltSlots> {
}
export {};
