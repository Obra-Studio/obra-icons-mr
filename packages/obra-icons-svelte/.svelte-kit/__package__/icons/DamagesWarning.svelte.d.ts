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
export type DamagesWarningProps = typeof __propDef.props;
export type DamagesWarningEvents = typeof __propDef.events;
export type DamagesWarningSlots = typeof __propDef.slots;
export default class DamagesWarning extends SvelteComponentTyped<DamagesWarningProps, DamagesWarningEvents, DamagesWarningSlots> {
}
export {};
