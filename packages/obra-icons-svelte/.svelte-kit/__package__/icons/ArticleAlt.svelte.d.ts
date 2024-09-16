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
export type ArticleAltProps = typeof __propDef.props;
export type ArticleAltEvents = typeof __propDef.events;
export type ArticleAltSlots = typeof __propDef.slots;
export default class ArticleAlt extends SvelteComponentTyped<ArticleAltProps, ArticleAltEvents, ArticleAltSlots> {
}
export {};
