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
export type WindowProps = typeof __propDef.props;
export type WindowEvents = typeof __propDef.events;
export type WindowSlots = typeof __propDef.slots;
export default class Window extends SvelteComponentTyped<WindowProps, WindowEvents, WindowSlots> {
}
export {};
