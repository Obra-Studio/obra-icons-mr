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
export type StopFillProps = typeof __propDef.props;
export type StopFillEvents = typeof __propDef.events;
export type StopFillSlots = typeof __propDef.slots;
export default class StopFill extends SvelteComponentTyped<StopFillProps, StopFillEvents, StopFillSlots> {
}
export {};
