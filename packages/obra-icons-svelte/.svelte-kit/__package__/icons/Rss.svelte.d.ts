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
export type RssProps = typeof __propDef.props;
export type RssEvents = typeof __propDef.events;
export type RssSlots = typeof __propDef.slots;
export default class Rss extends SvelteComponentTyped<RssProps, RssEvents, RssSlots> {
}
export {};
