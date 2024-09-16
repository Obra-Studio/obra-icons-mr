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
export type BookmarkAltProps = typeof __propDef.props;
export type BookmarkAltEvents = typeof __propDef.events;
export type BookmarkAltSlots = typeof __propDef.slots;
export default class BookmarkAlt extends SvelteComponentTyped<BookmarkAltProps, BookmarkAltEvents, BookmarkAltSlots> {
}
export {};
