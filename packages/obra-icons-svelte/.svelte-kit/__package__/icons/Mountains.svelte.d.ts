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
export type MountainsProps = typeof __propDef.props;
export type MountainsEvents = typeof __propDef.events;
export type MountainsSlots = typeof __propDef.slots;
export default class Mountains extends SvelteComponentTyped<MountainsProps, MountainsEvents, MountainsSlots> {
}
export {};
