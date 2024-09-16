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
export type BookOpenProps = typeof __propDef.props;
export type BookOpenEvents = typeof __propDef.events;
export type BookOpenSlots = typeof __propDef.slots;
export default class BookOpen extends SvelteComponentTyped<BookOpenProps, BookOpenEvents, BookOpenSlots> {
}
export {};
