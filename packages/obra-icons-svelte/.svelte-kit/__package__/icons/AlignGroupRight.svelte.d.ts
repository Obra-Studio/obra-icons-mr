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
export type AlignGroupRightProps = typeof __propDef.props;
export type AlignGroupRightEvents = typeof __propDef.events;
export type AlignGroupRightSlots = typeof __propDef.slots;
export default class AlignGroupRight extends SvelteComponentTyped<AlignGroupRightProps, AlignGroupRightEvents, AlignGroupRightSlots> {
}
export {};
