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
export type PaintRollerProps = typeof __propDef.props;
export type PaintRollerEvents = typeof __propDef.events;
export type PaintRollerSlots = typeof __propDef.slots;
export default class PaintRoller extends SvelteComponentTyped<PaintRollerProps, PaintRollerEvents, PaintRollerSlots> {
}
export {};
