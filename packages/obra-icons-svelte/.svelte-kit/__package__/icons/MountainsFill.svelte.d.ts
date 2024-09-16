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
export type MountainsFillProps = typeof __propDef.props;
export type MountainsFillEvents = typeof __propDef.events;
export type MountainsFillSlots = typeof __propDef.slots;
export default class MountainsFill extends SvelteComponentTyped<MountainsFillProps, MountainsFillEvents, MountainsFillSlots> {
}
export {};
