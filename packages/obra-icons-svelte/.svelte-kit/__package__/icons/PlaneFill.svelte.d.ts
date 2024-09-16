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
export type PlaneFillProps = typeof __propDef.props;
export type PlaneFillEvents = typeof __propDef.events;
export type PlaneFillSlots = typeof __propDef.slots;
export default class PlaneFill extends SvelteComponentTyped<PlaneFillProps, PlaneFillEvents, PlaneFillSlots> {
}
export {};
