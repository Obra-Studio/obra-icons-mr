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
export type MedcaseProps = typeof __propDef.props;
export type MedcaseEvents = typeof __propDef.events;
export type MedcaseSlots = typeof __propDef.slots;
export default class Medcase extends SvelteComponentTyped<MedcaseProps, MedcaseEvents, MedcaseSlots> {
}
export {};
