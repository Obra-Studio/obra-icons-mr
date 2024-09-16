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
export type StrikethroughProps = typeof __propDef.props;
export type StrikethroughEvents = typeof __propDef.events;
export type StrikethroughSlots = typeof __propDef.slots;
export default class Strikethrough extends SvelteComponentTyped<StrikethroughProps, StrikethroughEvents, StrikethroughSlots> {
}
export {};
