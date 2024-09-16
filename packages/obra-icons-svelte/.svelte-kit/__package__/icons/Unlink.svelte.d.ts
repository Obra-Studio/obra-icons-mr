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
export type UnlinkProps = typeof __propDef.props;
export type UnlinkEvents = typeof __propDef.events;
export type UnlinkSlots = typeof __propDef.slots;
export default class Unlink extends SvelteComponentTyped<UnlinkProps, UnlinkEvents, UnlinkSlots> {
}
export {};
