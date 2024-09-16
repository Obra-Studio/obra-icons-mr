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
export type CircleCloseFillProps = typeof __propDef.props;
export type CircleCloseFillEvents = typeof __propDef.events;
export type CircleCloseFillSlots = typeof __propDef.slots;
export default class CircleCloseFill extends SvelteComponentTyped<CircleCloseFillProps, CircleCloseFillEvents, CircleCloseFillSlots> {
}
export {};
