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
export type HandMoveProps = typeof __propDef.props;
export type HandMoveEvents = typeof __propDef.events;
export type HandMoveSlots = typeof __propDef.slots;
export default class HandMove extends SvelteComponentTyped<HandMoveProps, HandMoveEvents, HandMoveSlots> {
}
export {};
