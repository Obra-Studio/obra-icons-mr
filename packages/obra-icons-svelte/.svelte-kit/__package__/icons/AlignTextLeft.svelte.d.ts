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
export type AlignTextLeftProps = typeof __propDef.props;
export type AlignTextLeftEvents = typeof __propDef.events;
export type AlignTextLeftSlots = typeof __propDef.slots;
export default class AlignTextLeft extends SvelteComponentTyped<AlignTextLeftProps, AlignTextLeftEvents, AlignTextLeftSlots> {
}
export {};
