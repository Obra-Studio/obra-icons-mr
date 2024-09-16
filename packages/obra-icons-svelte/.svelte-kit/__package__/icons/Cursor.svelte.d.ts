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
export type CursorProps = typeof __propDef.props;
export type CursorEvents = typeof __propDef.events;
export type CursorSlots = typeof __propDef.slots;
export default class Cursor extends SvelteComponentTyped<CursorProps, CursorEvents, CursorSlots> {
}
export {};
