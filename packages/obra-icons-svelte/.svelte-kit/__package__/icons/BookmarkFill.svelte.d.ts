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
export type BookmarkFillProps = typeof __propDef.props;
export type BookmarkFillEvents = typeof __propDef.events;
export type BookmarkFillSlots = typeof __propDef.slots;
export default class BookmarkFill extends SvelteComponentTyped<BookmarkFillProps, BookmarkFillEvents, BookmarkFillSlots> {
}
export {};
