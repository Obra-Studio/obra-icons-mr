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
export type RulerProps = typeof __propDef.props;
export type RulerEvents = typeof __propDef.events;
export type RulerSlots = typeof __propDef.slots;
export default class Ruler extends SvelteComponentTyped<RulerProps, RulerEvents, RulerSlots> {
}
export {};
