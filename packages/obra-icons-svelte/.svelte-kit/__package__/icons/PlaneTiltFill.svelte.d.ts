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
export type PlaneTiltFillProps = typeof __propDef.props;
export type PlaneTiltFillEvents = typeof __propDef.events;
export type PlaneTiltFillSlots = typeof __propDef.slots;
export default class PlaneTiltFill extends SvelteComponentTyped<PlaneTiltFillProps, PlaneTiltFillEvents, PlaneTiltFillSlots> {
}
export {};
