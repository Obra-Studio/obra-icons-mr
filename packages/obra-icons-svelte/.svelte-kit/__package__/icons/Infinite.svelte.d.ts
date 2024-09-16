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
export type InfiniteProps = typeof __propDef.props;
export type InfiniteEvents = typeof __propDef.events;
export type InfiniteSlots = typeof __propDef.slots;
export default class Infinite extends SvelteComponentTyped<InfiniteProps, InfiniteEvents, InfiniteSlots> {
}
export {};
