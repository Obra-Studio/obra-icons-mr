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
export type CaretLeftRightProps = typeof __propDef.props;
export type CaretLeftRightEvents = typeof __propDef.events;
export type CaretLeftRightSlots = typeof __propDef.slots;
export default class CaretLeftRight extends SvelteComponentTyped<CaretLeftRightProps, CaretLeftRightEvents, CaretLeftRightSlots> {
}
export {};
