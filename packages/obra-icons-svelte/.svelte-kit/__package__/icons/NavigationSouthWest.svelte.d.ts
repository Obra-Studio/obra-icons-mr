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
export type NavigationSouthWestProps = typeof __propDef.props;
export type NavigationSouthWestEvents = typeof __propDef.events;
export type NavigationSouthWestSlots = typeof __propDef.slots;
export default class NavigationSouthWest extends SvelteComponentTyped<NavigationSouthWestProps, NavigationSouthWestEvents, NavigationSouthWestSlots> {
}
export {};
