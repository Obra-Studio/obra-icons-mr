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
export type LocationMarkerProps = typeof __propDef.props;
export type LocationMarkerEvents = typeof __propDef.events;
export type LocationMarkerSlots = typeof __propDef.slots;
export default class LocationMarker extends SvelteComponentTyped<LocationMarkerProps, LocationMarkerEvents, LocationMarkerSlots> {
}
export {};
