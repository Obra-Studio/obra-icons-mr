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
export type KnifeProps = typeof __propDef.props;
export type KnifeEvents = typeof __propDef.events;
export type KnifeSlots = typeof __propDef.slots;
export default class Knife extends SvelteComponentTyped<KnifeProps, KnifeEvents, KnifeSlots> {
}
export {};
