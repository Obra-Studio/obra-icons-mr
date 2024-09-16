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
export type PaintRollerFillProps = typeof __propDef.props;
export type PaintRollerFillEvents = typeof __propDef.events;
export type PaintRollerFillSlots = typeof __propDef.slots;
export default class PaintRollerFill extends SvelteComponentTyped<PaintRollerFillProps, PaintRollerFillEvents, PaintRollerFillSlots> {
}
export {};
