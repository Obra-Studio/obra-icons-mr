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
export type NavigationNorthEastProps = typeof __propDef.props;
export type NavigationNorthEastEvents = typeof __propDef.events;
export type NavigationNorthEastSlots = typeof __propDef.slots;
export default class NavigationNorthEast extends SvelteComponentTyped<NavigationNorthEastProps, NavigationNorthEastEvents, NavigationNorthEastSlots> {
}
export {};
