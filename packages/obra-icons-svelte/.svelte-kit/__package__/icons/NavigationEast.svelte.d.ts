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
export type NavigationEastProps = typeof __propDef.props;
export type NavigationEastEvents = typeof __propDef.events;
export type NavigationEastSlots = typeof __propDef.slots;
export default class NavigationEast extends SvelteComponentTyped<NavigationEastProps, NavigationEastEvents, NavigationEastSlots> {
}
export {};
