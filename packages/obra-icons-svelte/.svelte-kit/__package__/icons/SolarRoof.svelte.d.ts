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
export type SolarRoofProps = typeof __propDef.props;
export type SolarRoofEvents = typeof __propDef.events;
export type SolarRoofSlots = typeof __propDef.slots;
export default class SolarRoof extends SvelteComponentTyped<SolarRoofProps, SolarRoofEvents, SolarRoofSlots> {
}
export {};
