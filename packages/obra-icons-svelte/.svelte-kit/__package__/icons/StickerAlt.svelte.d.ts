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
export type StickerAltProps = typeof __propDef.props;
export type StickerAltEvents = typeof __propDef.events;
export type StickerAltSlots = typeof __propDef.slots;
export default class StickerAlt extends SvelteComponentTyped<StickerAltProps, StickerAltEvents, StickerAltSlots> {
}
export {};
