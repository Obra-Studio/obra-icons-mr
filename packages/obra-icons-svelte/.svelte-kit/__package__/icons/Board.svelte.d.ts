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
export type BoardProps = typeof __propDef.props;
export type BoardEvents = typeof __propDef.events;
export type BoardSlots = typeof __propDef.slots;
export default class Board extends SvelteComponentTyped<BoardProps, BoardEvents, BoardSlots> {
}
export {};
