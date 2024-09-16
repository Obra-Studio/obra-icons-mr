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
export type PenProps = typeof __propDef.props;
export type PenEvents = typeof __propDef.events;
export type PenSlots = typeof __propDef.slots;
export default class Pen extends SvelteComponentTyped<PenProps, PenEvents, PenSlots> {
}
export {};
