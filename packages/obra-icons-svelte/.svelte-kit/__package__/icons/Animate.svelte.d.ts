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
export type AnimateProps = typeof __propDef.props;
export type AnimateEvents = typeof __propDef.events;
export type AnimateSlots = typeof __propDef.slots;
export default class Animate extends SvelteComponentTyped<AnimateProps, AnimateEvents, AnimateSlots> {
}
export {};
