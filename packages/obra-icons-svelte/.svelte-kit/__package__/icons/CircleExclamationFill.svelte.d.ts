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
export type CircleExclamationFillProps = typeof __propDef.props;
export type CircleExclamationFillEvents = typeof __propDef.events;
export type CircleExclamationFillSlots = typeof __propDef.slots;
export default class CircleExclamationFill extends SvelteComponentTyped<CircleExclamationFillProps, CircleExclamationFillEvents, CircleExclamationFillSlots> {
}
export {};
