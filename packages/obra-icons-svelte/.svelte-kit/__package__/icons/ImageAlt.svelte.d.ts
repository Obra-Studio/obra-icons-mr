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
export type ImageAltProps = typeof __propDef.props;
export type ImageAltEvents = typeof __propDef.events;
export type ImageAltSlots = typeof __propDef.slots;
export default class ImageAlt extends SvelteComponentTyped<ImageAltProps, ImageAltEvents, ImageAltSlots> {
}
export {};
