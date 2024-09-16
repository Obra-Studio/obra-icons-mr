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
export type OfflineProps = typeof __propDef.props;
export type OfflineEvents = typeof __propDef.events;
export type OfflineSlots = typeof __propDef.slots;
export default class Offline extends SvelteComponentTyped<OfflineProps, OfflineEvents, OfflineSlots> {
}
export {};
