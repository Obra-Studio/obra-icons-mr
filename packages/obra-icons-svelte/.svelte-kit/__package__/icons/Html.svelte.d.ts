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
export type HtmlProps = typeof __propDef.props;
export type HtmlEvents = typeof __propDef.events;
export type HtmlSlots = typeof __propDef.slots;
export default class Html extends SvelteComponentTyped<HtmlProps, HtmlEvents, HtmlSlots> {
}
export {};
