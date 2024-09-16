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
export type FontSizeProps = typeof __propDef.props;
export type FontSizeEvents = typeof __propDef.events;
export type FontSizeSlots = typeof __propDef.slots;
export default class FontSize extends SvelteComponentTyped<FontSizeProps, FontSizeEvents, FontSizeSlots> {
}
export {};
