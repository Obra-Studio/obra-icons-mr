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
export type FullscreenProps = typeof __propDef.props;
export type FullscreenEvents = typeof __propDef.events;
export type FullscreenSlots = typeof __propDef.slots;
export default class Fullscreen extends SvelteComponentTyped<FullscreenProps, FullscreenEvents, FullscreenSlots> {
}
export {};
