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
export type CircleDivideProps = typeof __propDef.props;
export type CircleDivideEvents = typeof __propDef.events;
export type CircleDivideSlots = typeof __propDef.slots;
export default class CircleDivide extends SvelteComponentTyped<CircleDivideProps, CircleDivideEvents, CircleDivideSlots> {
}
export {};
