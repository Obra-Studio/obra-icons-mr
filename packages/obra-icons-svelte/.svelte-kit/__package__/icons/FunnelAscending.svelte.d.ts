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
export type FunnelAscendingProps = typeof __propDef.props;
export type FunnelAscendingEvents = typeof __propDef.events;
export type FunnelAscendingSlots = typeof __propDef.slots;
export default class FunnelAscending extends SvelteComponentTyped<FunnelAscendingProps, FunnelAscendingEvents, FunnelAscendingSlots> {
}
export {};
