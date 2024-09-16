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
export type LinkAddProps = typeof __propDef.props;
export type LinkAddEvents = typeof __propDef.events;
export type LinkAddSlots = typeof __propDef.slots;
export default class LinkAdd extends SvelteComponentTyped<LinkAddProps, LinkAddEvents, LinkAddSlots> {
}
export {};
