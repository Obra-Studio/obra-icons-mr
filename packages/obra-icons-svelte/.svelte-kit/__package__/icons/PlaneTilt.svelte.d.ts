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
export type PlaneTiltProps = typeof __propDef.props;
export type PlaneTiltEvents = typeof __propDef.events;
export type PlaneTiltSlots = typeof __propDef.slots;
export default class PlaneTilt extends SvelteComponentTyped<PlaneTiltProps, PlaneTiltEvents, PlaneTiltSlots> {
}
export {};
