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
export type ArticleProps = typeof __propDef.props;
export type ArticleEvents = typeof __propDef.events;
export type ArticleSlots = typeof __propDef.slots;
export default class Article extends SvelteComponentTyped<ArticleProps, ArticleEvents, ArticleSlots> {
}
export {};
