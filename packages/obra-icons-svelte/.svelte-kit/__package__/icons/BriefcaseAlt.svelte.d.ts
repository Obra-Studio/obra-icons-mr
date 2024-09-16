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
export type BriefcaseAltProps = typeof __propDef.props;
export type BriefcaseAltEvents = typeof __propDef.events;
export type BriefcaseAltSlots = typeof __propDef.slots;
export default class BriefcaseAlt extends SvelteComponentTyped<BriefcaseAltProps, BriefcaseAltEvents, BriefcaseAltSlots> {
}
export {};
