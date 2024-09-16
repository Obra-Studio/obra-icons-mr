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
export type RouteProps = typeof __propDef.props;
export type RouteEvents = typeof __propDef.events;
export type RouteSlots = typeof __propDef.slots;
export default class Route extends SvelteComponentTyped<RouteProps, RouteEvents, RouteSlots> {
}
export {};
