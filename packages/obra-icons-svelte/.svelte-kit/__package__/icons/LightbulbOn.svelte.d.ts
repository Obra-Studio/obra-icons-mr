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
export type LightbulbOnProps = typeof __propDef.props;
export type LightbulbOnEvents = typeof __propDef.events;
export type LightbulbOnSlots = typeof __propDef.slots;
export default class LightbulbOn extends SvelteComponentTyped<LightbulbOnProps, LightbulbOnEvents, LightbulbOnSlots> {
}
export {};
