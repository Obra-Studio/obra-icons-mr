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
export type NavigationSouthEastProps = typeof __propDef.props;
export type NavigationSouthEastEvents = typeof __propDef.events;
export type NavigationSouthEastSlots = typeof __propDef.slots;
export default class NavigationSouthEast extends SvelteComponentTyped<NavigationSouthEastProps, NavigationSouthEastEvents, NavigationSouthEastSlots> {
}
export {};
