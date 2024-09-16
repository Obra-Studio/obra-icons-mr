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
export type AcademicCapProps = typeof __propDef.props;
export type AcademicCapEvents = typeof __propDef.events;
export type AcademicCapSlots = typeof __propDef.slots;
export default class AcademicCap extends SvelteComponentTyped<AcademicCapProps, AcademicCapEvents, AcademicCapSlots> {
}
export {};
