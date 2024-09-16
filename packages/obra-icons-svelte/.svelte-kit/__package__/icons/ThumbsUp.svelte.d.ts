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
export type ThumbsUpProps = typeof __propDef.props;
export type ThumbsUpEvents = typeof __propDef.events;
export type ThumbsUpSlots = typeof __propDef.slots;
export default class ThumbsUp extends SvelteComponentTyped<ThumbsUpProps, ThumbsUpEvents, ThumbsUpSlots> {
}
export {};
