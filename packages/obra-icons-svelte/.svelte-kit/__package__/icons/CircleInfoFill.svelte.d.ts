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
export type CircleInfoFillProps = typeof __propDef.props;
export type CircleInfoFillEvents = typeof __propDef.events;
export type CircleInfoFillSlots = typeof __propDef.slots;
export default class CircleInfoFill extends SvelteComponentTyped<CircleInfoFillProps, CircleInfoFillEvents, CircleInfoFillSlots> {
}
export {};
