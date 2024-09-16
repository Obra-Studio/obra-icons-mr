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
export type UnderlineProps = typeof __propDef.props;
export type UnderlineEvents = typeof __propDef.events;
export type UnderlineSlots = typeof __propDef.slots;
export default class Underline extends SvelteComponentTyped<UnderlineProps, UnderlineEvents, UnderlineSlots> {
}
export {};
