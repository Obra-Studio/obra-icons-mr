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
export type MasonryProps = typeof __propDef.props;
export type MasonryEvents = typeof __propDef.events;
export type MasonrySlots = typeof __propDef.slots;
export default class Masonry extends SvelteComponentTyped<MasonryProps, MasonryEvents, MasonrySlots> {
}
export {};
