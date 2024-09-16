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
export type CircleFillProps = typeof __propDef.props;
export type CircleFillEvents = typeof __propDef.events;
export type CircleFillSlots = typeof __propDef.slots;
export default class CircleFill extends SvelteComponentTyped<CircleFillProps, CircleFillEvents, CircleFillSlots> {
}
export {};
