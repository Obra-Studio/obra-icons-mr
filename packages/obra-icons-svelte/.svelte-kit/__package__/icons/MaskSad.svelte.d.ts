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
export type MaskSadProps = typeof __propDef.props;
export type MaskSadEvents = typeof __propDef.events;
export type MaskSadSlots = typeof __propDef.slots;
export default class MaskSad extends SvelteComponentTyped<MaskSadProps, MaskSadEvents, MaskSadSlots> {
}
export {};
