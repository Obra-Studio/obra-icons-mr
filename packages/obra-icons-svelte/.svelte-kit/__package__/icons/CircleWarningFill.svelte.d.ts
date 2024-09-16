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
export type CircleWarningFillProps = typeof __propDef.props;
export type CircleWarningFillEvents = typeof __propDef.events;
export type CircleWarningFillSlots = typeof __propDef.slots;
export default class CircleWarningFill extends SvelteComponentTyped<CircleWarningFillProps, CircleWarningFillEvents, CircleWarningFillSlots> {
}
export {};
