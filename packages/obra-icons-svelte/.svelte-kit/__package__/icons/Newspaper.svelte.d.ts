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
export type NewspaperProps = typeof __propDef.props;
export type NewspaperEvents = typeof __propDef.events;
export type NewspaperSlots = typeof __propDef.slots;
export default class Newspaper extends SvelteComponentTyped<NewspaperProps, NewspaperEvents, NewspaperSlots> {
}
export {};
