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
export type ThreeRowsProps = typeof __propDef.props;
export type ThreeRowsEvents = typeof __propDef.events;
export type ThreeRowsSlots = typeof __propDef.slots;
export default class ThreeRows extends SvelteComponentTyped<ThreeRowsProps, ThreeRowsEvents, ThreeRowsSlots> {
}
export {};
