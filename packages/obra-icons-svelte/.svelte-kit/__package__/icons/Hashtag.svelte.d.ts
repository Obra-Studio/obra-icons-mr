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
export type HashtagProps = typeof __propDef.props;
export type HashtagEvents = typeof __propDef.events;
export type HashtagSlots = typeof __propDef.slots;
export default class Hashtag extends SvelteComponentTyped<HashtagProps, HashtagEvents, HashtagSlots> {
}
export {};
