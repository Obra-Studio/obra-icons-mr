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
export type TagHorizontalProps = typeof __propDef.props;
export type TagHorizontalEvents = typeof __propDef.events;
export type TagHorizontalSlots = typeof __propDef.slots;
export default class TagHorizontal extends SvelteComponentTyped<TagHorizontalProps, TagHorizontalEvents, TagHorizontalSlots> {
}
export {};
