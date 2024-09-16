import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GhostFillProps = typeof __propDef.props;
export type GhostFillEvents = typeof __propDef.events;
export type GhostFillSlots = typeof __propDef.slots;
export default class GhostFill extends SvelteComponentTyped<GhostFillProps, GhostFillEvents, GhostFillSlots> {
}
export {};
