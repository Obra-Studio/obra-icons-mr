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
export type LightbulbProps = typeof __propDef.props;
export type LightbulbEvents = typeof __propDef.events;
export type LightbulbSlots = typeof __propDef.slots;
export default class Lightbulb extends SvelteComponentTyped<LightbulbProps, LightbulbEvents, LightbulbSlots> {
}
export {};
