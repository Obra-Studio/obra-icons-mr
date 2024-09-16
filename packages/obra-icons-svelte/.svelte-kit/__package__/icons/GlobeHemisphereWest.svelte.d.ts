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
export type GlobeHemisphereWestProps = typeof __propDef.props;
export type GlobeHemisphereWestEvents = typeof __propDef.events;
export type GlobeHemisphereWestSlots = typeof __propDef.slots;
export default class GlobeHemisphereWest extends SvelteComponentTyped<GlobeHemisphereWestProps, GlobeHemisphereWestEvents, GlobeHemisphereWestSlots> {
}
export {};
