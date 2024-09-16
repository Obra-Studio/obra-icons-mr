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
export type GifProps = typeof __propDef.props;
export type GifEvents = typeof __propDef.events;
export type GifSlots = typeof __propDef.slots;
export default class Gif extends SvelteComponentTyped<GifProps, GifEvents, GifSlots> {
}
export {};
