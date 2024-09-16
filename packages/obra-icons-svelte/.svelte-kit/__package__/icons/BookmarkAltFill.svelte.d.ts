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
export type BookmarkAltFillProps = typeof __propDef.props;
export type BookmarkAltFillEvents = typeof __propDef.events;
export type BookmarkAltFillSlots = typeof __propDef.slots;
export default class BookmarkAltFill extends SvelteComponentTyped<BookmarkAltFillProps, BookmarkAltFillEvents, BookmarkAltFillSlots> {
}
export {};
