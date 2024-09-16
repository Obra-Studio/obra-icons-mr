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
export type AlignText4LeftProps = typeof __propDef.props;
export type AlignText4LeftEvents = typeof __propDef.events;
export type AlignText4LeftSlots = typeof __propDef.slots;
export default class AlignText4Left extends SvelteComponentTyped<AlignText4LeftProps, AlignText4LeftEvents, AlignText4LeftSlots> {
}
export {};
