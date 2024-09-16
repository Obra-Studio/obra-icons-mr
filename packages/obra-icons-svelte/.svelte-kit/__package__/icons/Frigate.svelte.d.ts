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
export type FrigateProps = typeof __propDef.props;
export type FrigateEvents = typeof __propDef.events;
export type FrigateSlots = typeof __propDef.slots;
export default class Frigate extends SvelteComponentTyped<FrigateProps, FrigateEvents, FrigateSlots> {
}
export {};
