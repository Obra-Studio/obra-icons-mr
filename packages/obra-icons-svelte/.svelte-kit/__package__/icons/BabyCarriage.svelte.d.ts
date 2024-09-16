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
export type BabyCarriageProps = typeof __propDef.props;
export type BabyCarriageEvents = typeof __propDef.events;
export type BabyCarriageSlots = typeof __propDef.slots;
export default class BabyCarriage extends SvelteComponentTyped<BabyCarriageProps, BabyCarriageEvents, BabyCarriageSlots> {
}
export {};
