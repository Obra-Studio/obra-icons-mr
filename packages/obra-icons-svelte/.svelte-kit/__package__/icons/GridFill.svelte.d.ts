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
export type GridFillProps = typeof __propDef.props;
export type GridFillEvents = typeof __propDef.events;
export type GridFillSlots = typeof __propDef.slots;
export default class GridFill extends SvelteComponentTyped<GridFillProps, GridFillEvents, GridFillSlots> {
}
export {};
