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
export type IndianRupeeProps = typeof __propDef.props;
export type IndianRupeeEvents = typeof __propDef.events;
export type IndianRupeeSlots = typeof __propDef.slots;
export default class IndianRupee extends SvelteComponentTyped<IndianRupeeProps, IndianRupeeEvents, IndianRupeeSlots> {
}
export {};
