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
export type BriefcaseProps = typeof __propDef.props;
export type BriefcaseEvents = typeof __propDef.events;
export type BriefcaseSlots = typeof __propDef.slots;
export default class Briefcase extends SvelteComponentTyped<BriefcaseProps, BriefcaseEvents, BriefcaseSlots> {
}
export {};
