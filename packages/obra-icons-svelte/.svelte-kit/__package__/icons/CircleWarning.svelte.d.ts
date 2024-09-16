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
export type CircleWarningProps = typeof __propDef.props;
export type CircleWarningEvents = typeof __propDef.events;
export type CircleWarningSlots = typeof __propDef.slots;
export default class CircleWarning extends SvelteComponentTyped<CircleWarningProps, CircleWarningEvents, CircleWarningSlots> {
}
export {};
