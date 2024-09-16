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
export type PoundProps = typeof __propDef.props;
export type PoundEvents = typeof __propDef.events;
export type PoundSlots = typeof __propDef.slots;
export default class Pound extends SvelteComponentTyped<PoundProps, PoundEvents, PoundSlots> {
}
export {};
