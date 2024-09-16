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
export type SunsetProps = typeof __propDef.props;
export type SunsetEvents = typeof __propDef.events;
export type SunsetSlots = typeof __propDef.slots;
export default class Sunset extends SvelteComponentTyped<SunsetProps, SunsetEvents, SunsetSlots> {
}
export {};
