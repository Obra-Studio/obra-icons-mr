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
export type FamilyProps = typeof __propDef.props;
export type FamilyEvents = typeof __propDef.events;
export type FamilySlots = typeof __propDef.slots;
export default class Family extends SvelteComponentTyped<FamilyProps, FamilyEvents, FamilySlots> {
}
export {};
