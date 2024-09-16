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
export type UndoProps = typeof __propDef.props;
export type UndoEvents = typeof __propDef.events;
export type UndoSlots = typeof __propDef.slots;
export default class Undo extends SvelteComponentTyped<UndoProps, UndoEvents, UndoSlots> {
}
export {};
