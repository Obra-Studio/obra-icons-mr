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
export type FunnelDescendingProps = typeof __propDef.props;
export type FunnelDescendingEvents = typeof __propDef.events;
export type FunnelDescendingSlots = typeof __propDef.slots;
export default class FunnelDescending extends SvelteComponentTyped<FunnelDescendingProps, FunnelDescendingEvents, FunnelDescendingSlots> {
}
export {};
