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
export type SitemapProps = typeof __propDef.props;
export type SitemapEvents = typeof __propDef.events;
export type SitemapSlots = typeof __propDef.slots;
export default class Sitemap extends SvelteComponentTyped<SitemapProps, SitemapEvents, SitemapSlots> {
}
export {};
