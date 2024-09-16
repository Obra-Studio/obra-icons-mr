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
export type LightbulbOffProps = typeof __propDef.props;
export type LightbulbOffEvents = typeof __propDef.events;
export type LightbulbOffSlots = typeof __propDef.slots;
export default class LightbulbOff extends SvelteComponentTyped<LightbulbOffProps, LightbulbOffEvents, LightbulbOffSlots> {
}
export {};
