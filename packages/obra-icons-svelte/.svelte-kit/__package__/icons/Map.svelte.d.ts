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
export type MapProps = typeof __propDef.props;
export type MapEvents = typeof __propDef.events;
export type MapSlots = typeof __propDef.slots;
export default class Map extends SvelteComponentTyped<MapProps, MapEvents, MapSlots> {
}
export {};
