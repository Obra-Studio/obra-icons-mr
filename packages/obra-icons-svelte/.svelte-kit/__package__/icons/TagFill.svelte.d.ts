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
export type TagFillProps = typeof __propDef.props;
export type TagFillEvents = typeof __propDef.events;
export type TagFillSlots = typeof __propDef.slots;
export default class TagFill extends SvelteComponentTyped<TagFillProps, TagFillEvents, TagFillSlots> {
}
export {};
