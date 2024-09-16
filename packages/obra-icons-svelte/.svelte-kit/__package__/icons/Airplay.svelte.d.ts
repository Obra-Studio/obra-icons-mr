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
export type AirplayProps = typeof __propDef.props;
export type AirplayEvents = typeof __propDef.events;
export type AirplaySlots = typeof __propDef.slots;
export default class Airplay extends SvelteComponentTyped<AirplayProps, AirplayEvents, AirplaySlots> {
}
export {};
