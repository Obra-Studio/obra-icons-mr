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
export type SolarPanelProps = typeof __propDef.props;
export type SolarPanelEvents = typeof __propDef.events;
export type SolarPanelSlots = typeof __propDef.slots;
export default class SolarPanel extends SvelteComponentTyped<SolarPanelProps, SolarPanelEvents, SolarPanelSlots> {
}
export {};
