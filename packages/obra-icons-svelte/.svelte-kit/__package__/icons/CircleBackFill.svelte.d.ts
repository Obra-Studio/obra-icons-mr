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
export type CircleBackFillProps = typeof __propDef.props;
export type CircleBackFillEvents = typeof __propDef.events;
export type CircleBackFillSlots = typeof __propDef.slots;
export default class CircleBackFill extends SvelteComponentTyped<CircleBackFillProps, CircleBackFillEvents, CircleBackFillSlots> {
}
export {};
