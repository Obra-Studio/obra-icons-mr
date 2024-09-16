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
export type CommentFillProps = typeof __propDef.props;
export type CommentFillEvents = typeof __propDef.events;
export type CommentFillSlots = typeof __propDef.slots;
export default class CommentFill extends SvelteComponentTyped<CommentFillProps, CommentFillEvents, CommentFillSlots> {
}
export {};
