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
export type MaskFillProps = typeof __propDef.props;
export type MaskFillEvents = typeof __propDef.events;
export type MaskFillSlots = typeof __propDef.slots;
export default class MaskFill extends SvelteComponentTyped<MaskFillProps, MaskFillEvents, MaskFillSlots> {
}
export {};
