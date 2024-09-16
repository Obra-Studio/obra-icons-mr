import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TemperatureFillProps = typeof __propDef.props;
export type TemperatureFillEvents = typeof __propDef.events;
export type TemperatureFillSlots = typeof __propDef.slots;
export default class TemperatureFill extends SvelteComponentTyped<TemperatureFillProps, TemperatureFillEvents, TemperatureFillSlots> {
}
export {};
