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
export type SparklesFillProps = typeof __propDef.props;
export type SparklesFillEvents = typeof __propDef.events;
export type SparklesFillSlots = typeof __propDef.slots;
export default class SparklesFill extends SvelteComponentTyped<SparklesFillProps, SparklesFillEvents, SparklesFillSlots> {
}
export {};
