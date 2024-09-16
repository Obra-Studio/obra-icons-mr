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
export type WatchProps = typeof __propDef.props;
export type WatchEvents = typeof __propDef.events;
export type WatchSlots = typeof __propDef.slots;
export default class Watch extends SvelteComponentTyped<WatchProps, WatchEvents, WatchSlots> {
}
export {};
