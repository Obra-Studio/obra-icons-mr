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
export type NavigationNorthWestProps = typeof __propDef.props;
export type NavigationNorthWestEvents = typeof __propDef.events;
export type NavigationNorthWestSlots = typeof __propDef.slots;
export default class NavigationNorthWest extends SvelteComponentTyped<NavigationNorthWestProps, NavigationNorthWestEvents, NavigationNorthWestSlots> {
}
export {};
