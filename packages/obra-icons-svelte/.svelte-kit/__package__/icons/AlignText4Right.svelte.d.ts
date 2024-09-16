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
export type AlignText4RightProps = typeof __propDef.props;
export type AlignText4RightEvents = typeof __propDef.events;
export type AlignText4RightSlots = typeof __propDef.slots;
export default class AlignText4Right extends SvelteComponentTyped<AlignText4RightProps, AlignText4RightEvents, AlignText4RightSlots> {
}
export {};
