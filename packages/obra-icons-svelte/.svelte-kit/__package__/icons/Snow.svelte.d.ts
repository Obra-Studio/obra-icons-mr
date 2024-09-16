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
export type SnowProps = typeof __propDef.props;
export type SnowEvents = typeof __propDef.events;
export type SnowSlots = typeof __propDef.slots;
export default class Snow extends SvelteComponentTyped<SnowProps, SnowEvents, SnowSlots> {
}
export {};
