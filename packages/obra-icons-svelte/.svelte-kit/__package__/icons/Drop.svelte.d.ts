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
export type DropProps = typeof __propDef.props;
export type DropEvents = typeof __propDef.events;
export type DropSlots = typeof __propDef.slots;
export default class Drop extends SvelteComponentTyped<DropProps, DropEvents, DropSlots> {
}
export {};
