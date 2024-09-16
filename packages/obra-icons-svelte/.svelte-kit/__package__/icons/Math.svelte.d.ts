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
export type MathProps = typeof __propDef.props;
export type MathEvents = typeof __propDef.events;
export type MathSlots = typeof __propDef.slots;
export default class Math extends SvelteComponentTyped<MathProps, MathEvents, MathSlots> {
}
export {};
