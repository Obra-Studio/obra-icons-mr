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
export type SnapProps = typeof __propDef.props;
export type SnapEvents = typeof __propDef.events;
export type SnapSlots = typeof __propDef.slots;
export default class Snap extends SvelteComponentTyped<SnapProps, SnapEvents, SnapSlots> {
}
export {};
