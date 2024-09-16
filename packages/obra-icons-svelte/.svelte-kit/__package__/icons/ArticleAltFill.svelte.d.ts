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
export type ArticleAltFillProps = typeof __propDef.props;
export type ArticleAltFillEvents = typeof __propDef.events;
export type ArticleAltFillSlots = typeof __propDef.slots;
export default class ArticleAltFill extends SvelteComponentTyped<ArticleAltFillProps, ArticleAltFillEvents, ArticleAltFillSlots> {
}
export {};
