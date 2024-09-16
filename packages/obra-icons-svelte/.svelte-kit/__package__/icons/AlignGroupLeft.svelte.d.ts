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
export type AlignGroupLeftProps = typeof __propDef.props;
export type AlignGroupLeftEvents = typeof __propDef.events;
export type AlignGroupLeftSlots = typeof __propDef.slots;
export default class AlignGroupLeft extends SvelteComponentTyped<AlignGroupLeftProps, AlignGroupLeftEvents, AlignGroupLeftSlots> {
}
export {};
