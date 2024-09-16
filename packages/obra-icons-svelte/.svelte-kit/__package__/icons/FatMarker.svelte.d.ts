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
export type FatMarkerProps = typeof __propDef.props;
export type FatMarkerEvents = typeof __propDef.events;
export type FatMarkerSlots = typeof __propDef.slots;
export default class FatMarker extends SvelteComponentTyped<FatMarkerProps, FatMarkerEvents, FatMarkerSlots> {
}
export {};
