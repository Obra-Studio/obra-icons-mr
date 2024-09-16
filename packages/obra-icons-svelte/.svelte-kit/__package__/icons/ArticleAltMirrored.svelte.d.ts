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
export type ArticleAltMirroredProps = typeof __propDef.props;
export type ArticleAltMirroredEvents = typeof __propDef.events;
export type ArticleAltMirroredSlots = typeof __propDef.slots;
export default class ArticleAltMirrored extends SvelteComponentTyped<ArticleAltMirroredProps, ArticleAltMirroredEvents, ArticleAltMirroredSlots> {
}
export {};
