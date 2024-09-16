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
export type RemoveBackgroundAltProps = typeof __propDef.props;
export type RemoveBackgroundAltEvents = typeof __propDef.events;
export type RemoveBackgroundAltSlots = typeof __propDef.slots;
export default class RemoveBackgroundAlt extends SvelteComponentTyped<RemoveBackgroundAltProps, RemoveBackgroundAltEvents, RemoveBackgroundAltSlots> {
}
export {};
