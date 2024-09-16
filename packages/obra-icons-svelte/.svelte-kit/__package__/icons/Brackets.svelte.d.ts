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
export type BracketsProps = typeof __propDef.props;
export type BracketsEvents = typeof __propDef.events;
export type BracketsSlots = typeof __propDef.slots;
export default class Brackets extends SvelteComponentTyped<BracketsProps, BracketsEvents, BracketsSlots> {
}
export {};
