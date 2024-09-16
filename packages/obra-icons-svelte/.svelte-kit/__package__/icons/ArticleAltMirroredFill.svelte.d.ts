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
export type ArticleAltMirroredFillProps = typeof __propDef.props;
export type ArticleAltMirroredFillEvents = typeof __propDef.events;
export type ArticleAltMirroredFillSlots = typeof __propDef.slots;
export default class ArticleAltMirroredFill extends SvelteComponentTyped<ArticleAltMirroredFillProps, ArticleAltMirroredFillEvents, ArticleAltMirroredFillSlots> {
}
export {};
