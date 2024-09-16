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
export type MoveProps = typeof __propDef.props;
export type MoveEvents = typeof __propDef.events;
export type MoveSlots = typeof __propDef.slots;
export default class Move extends SvelteComponentTyped<MoveProps, MoveEvents, MoveSlots> {
}
export {};
