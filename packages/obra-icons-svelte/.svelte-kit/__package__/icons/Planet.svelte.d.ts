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
export type PlanetProps = typeof __propDef.props;
export type PlanetEvents = typeof __propDef.events;
export type PlanetSlots = typeof __propDef.slots;
export default class Planet extends SvelteComponentTyped<PlanetProps, PlanetEvents, PlanetSlots> {
}
export {};
