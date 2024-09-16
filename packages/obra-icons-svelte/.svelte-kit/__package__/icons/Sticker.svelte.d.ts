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
export type StickerProps = typeof __propDef.props;
export type StickerEvents = typeof __propDef.events;
export type StickerSlots = typeof __propDef.slots;
export default class Sticker extends SvelteComponentTyped<StickerProps, StickerEvents, StickerSlots> {
}
export {};
