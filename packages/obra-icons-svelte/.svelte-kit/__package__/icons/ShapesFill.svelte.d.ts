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
export type ShapesFillProps = typeof __propDef.props;
export type ShapesFillEvents = typeof __propDef.events;
export type ShapesFillSlots = typeof __propDef.slots;
export default class ShapesFill extends SvelteComponentTyped<ShapesFillProps, ShapesFillEvents, ShapesFillSlots> {
}
export {};
