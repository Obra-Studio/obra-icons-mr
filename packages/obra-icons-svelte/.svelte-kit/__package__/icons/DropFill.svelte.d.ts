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
export type DropFillProps = typeof __propDef.props;
export type DropFillEvents = typeof __propDef.events;
export type DropFillSlots = typeof __propDef.slots;
export default class DropFill extends SvelteComponentTyped<DropFillProps, DropFillEvents, DropFillSlots> {
}
export {};
