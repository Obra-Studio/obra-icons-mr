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
export type SnowflakeProps = typeof __propDef.props;
export type SnowflakeEvents = typeof __propDef.events;
export type SnowflakeSlots = typeof __propDef.slots;
export default class Snowflake extends SvelteComponentTyped<SnowflakeProps, SnowflakeEvents, SnowflakeSlots> {
}
export {};
