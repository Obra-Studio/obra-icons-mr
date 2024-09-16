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
export type LinkAltProps = typeof __propDef.props;
export type LinkAltEvents = typeof __propDef.events;
export type LinkAltSlots = typeof __propDef.slots;
export default class LinkAlt extends SvelteComponentTyped<LinkAltProps, LinkAltEvents, LinkAltSlots> {
}
export {};
