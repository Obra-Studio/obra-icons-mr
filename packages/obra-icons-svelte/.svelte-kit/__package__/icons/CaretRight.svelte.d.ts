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
export type CaretRightProps = typeof __propDef.props;
export type CaretRightEvents = typeof __propDef.events;
export type CaretRightSlots = typeof __propDef.slots;
export default class CaretRight extends SvelteComponentTyped<CaretRightProps, CaretRightEvents, CaretRightSlots> {
}
export {};
