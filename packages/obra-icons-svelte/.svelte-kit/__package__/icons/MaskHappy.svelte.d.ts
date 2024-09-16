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
export type MaskHappyProps = typeof __propDef.props;
export type MaskHappyEvents = typeof __propDef.events;
export type MaskHappySlots = typeof __propDef.slots;
export default class MaskHappy extends SvelteComponentTyped<MaskHappyProps, MaskHappyEvents, MaskHappySlots> {
}
export {};
