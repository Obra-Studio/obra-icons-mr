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
export type BabyProps = typeof __propDef.props;
export type BabyEvents = typeof __propDef.events;
export type BabySlots = typeof __propDef.slots;
export default class Baby extends SvelteComponentTyped<BabyProps, BabyEvents, BabySlots> {
}
export {};
