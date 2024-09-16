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
export type CloudyProps = typeof __propDef.props;
export type CloudyEvents = typeof __propDef.events;
export type CloudySlots = typeof __propDef.slots;
export default class Cloudy extends SvelteComponentTyped<CloudyProps, CloudyEvents, CloudySlots> {
}
export {};
