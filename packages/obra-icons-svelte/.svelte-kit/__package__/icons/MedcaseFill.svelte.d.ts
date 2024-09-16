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
export type MedcaseFillProps = typeof __propDef.props;
export type MedcaseFillEvents = typeof __propDef.events;
export type MedcaseFillSlots = typeof __propDef.slots;
export default class MedcaseFill extends SvelteComponentTyped<MedcaseFillProps, MedcaseFillEvents, MedcaseFillSlots> {
}
export {};
