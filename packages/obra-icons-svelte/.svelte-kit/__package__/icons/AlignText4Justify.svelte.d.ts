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
export type AlignText4JustifyProps = typeof __propDef.props;
export type AlignText4JustifyEvents = typeof __propDef.events;
export type AlignText4JustifySlots = typeof __propDef.slots;
export default class AlignText4Justify extends SvelteComponentTyped<AlignText4JustifyProps, AlignText4JustifyEvents, AlignText4JustifySlots> {
}
export {};
