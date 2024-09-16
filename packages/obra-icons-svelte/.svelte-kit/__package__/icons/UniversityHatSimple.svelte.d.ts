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
export type UniversityHatSimpleProps = typeof __propDef.props;
export type UniversityHatSimpleEvents = typeof __propDef.events;
export type UniversityHatSimpleSlots = typeof __propDef.slots;
export default class UniversityHatSimple extends SvelteComponentTyped<UniversityHatSimpleProps, UniversityHatSimpleEvents, UniversityHatSimpleSlots> {
}
export {};
