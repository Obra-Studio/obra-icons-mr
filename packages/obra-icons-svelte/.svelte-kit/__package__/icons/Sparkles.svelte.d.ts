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
export type SparklesProps = typeof __propDef.props;
export type SparklesEvents = typeof __propDef.events;
export type SparklesSlots = typeof __propDef.slots;
export default class Sparkles extends SvelteComponentTyped<SparklesProps, SparklesEvents, SparklesSlots> {
}
export {};
