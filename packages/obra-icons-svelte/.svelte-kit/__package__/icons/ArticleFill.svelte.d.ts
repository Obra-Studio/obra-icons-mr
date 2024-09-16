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
export type ArticleFillProps = typeof __propDef.props;
export type ArticleFillEvents = typeof __propDef.events;
export type ArticleFillSlots = typeof __propDef.slots;
export default class ArticleFill extends SvelteComponentTyped<ArticleFillProps, ArticleFillEvents, ArticleFillSlots> {
}
export {};
