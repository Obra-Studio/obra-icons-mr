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
export type DumbellProps = typeof __propDef.props;
export type DumbellEvents = typeof __propDef.events;
export type DumbellSlots = typeof __propDef.slots;
export default class Dumbell extends SvelteComponentTyped<DumbellProps, DumbellEvents, DumbellSlots> {
}
export {};
