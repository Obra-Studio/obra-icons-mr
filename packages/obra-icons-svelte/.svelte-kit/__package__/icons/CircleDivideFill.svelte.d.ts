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
export type CircleDivideFillProps = typeof __propDef.props;
export type CircleDivideFillEvents = typeof __propDef.events;
export type CircleDivideFillSlots = typeof __propDef.slots;
export default class CircleDivideFill extends SvelteComponentTyped<CircleDivideFillProps, CircleDivideFillEvents, CircleDivideFillSlots> {
}
export {};
