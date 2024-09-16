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
export type GhostProps = typeof __propDef.props;
export type GhostEvents = typeof __propDef.events;
export type GhostSlots = typeof __propDef.slots;
export default class Ghost extends SvelteComponentTyped<GhostProps, GhostEvents, GhostSlots> {
}
export {};
