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
export type WarehouseProps = typeof __propDef.props;
export type WarehouseEvents = typeof __propDef.events;
export type WarehouseSlots = typeof __propDef.slots;
export default class Warehouse extends SvelteComponentTyped<WarehouseProps, WarehouseEvents, WarehouseSlots> {
}
export {};
