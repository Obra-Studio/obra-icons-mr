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
export type TagHorizontalFillProps = typeof __propDef.props;
export type TagHorizontalFillEvents = typeof __propDef.events;
export type TagHorizontalFillSlots = typeof __propDef.slots;
export default class TagHorizontalFill extends SvelteComponentTyped<TagHorizontalFillProps, TagHorizontalFillEvents, TagHorizontalFillSlots> {
}
export {};
