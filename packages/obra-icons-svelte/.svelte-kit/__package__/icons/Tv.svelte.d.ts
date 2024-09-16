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
export type TvProps = typeof __propDef.props;
export type TvEvents = typeof __propDef.events;
export type TvSlots = typeof __propDef.slots;
export default class Tv extends SvelteComponentTyped<TvProps, TvEvents, TvSlots> {
}
export {};
