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
export type EraserProps = typeof __propDef.props;
export type EraserEvents = typeof __propDef.events;
export type EraserSlots = typeof __propDef.slots;
export default class Eraser extends SvelteComponentTyped<EraserProps, EraserEvents, EraserSlots> {
}
export {};
