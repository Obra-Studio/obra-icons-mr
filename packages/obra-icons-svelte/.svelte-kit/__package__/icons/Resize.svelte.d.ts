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
export type ResizeProps = typeof __propDef.props;
export type ResizeEvents = typeof __propDef.events;
export type ResizeSlots = typeof __propDef.slots;
export default class Resize extends SvelteComponentTyped<ResizeProps, ResizeEvents, ResizeSlots> {
}
export {};
