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
export type MaskProps = typeof __propDef.props;
export type MaskEvents = typeof __propDef.events;
export type MaskSlots = typeof __propDef.slots;
export default class Mask extends SvelteComponentTyped<MaskProps, MaskEvents, MaskSlots> {
}
export {};
