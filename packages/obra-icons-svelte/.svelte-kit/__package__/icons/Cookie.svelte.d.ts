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
export type CookieProps = typeof __propDef.props;
export type CookieEvents = typeof __propDef.events;
export type CookieSlots = typeof __propDef.slots;
export default class Cookie extends SvelteComponentTyped<CookieProps, CookieEvents, CookieSlots> {
}
export {};
