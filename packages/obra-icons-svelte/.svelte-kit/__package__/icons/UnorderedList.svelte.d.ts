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
export type UnorderedListProps = typeof __propDef.props;
export type UnorderedListEvents = typeof __propDef.events;
export type UnorderedListSlots = typeof __propDef.slots;
export default class UnorderedList extends SvelteComponentTyped<UnorderedListProps, UnorderedListEvents, UnorderedListSlots> {
}
export {};
