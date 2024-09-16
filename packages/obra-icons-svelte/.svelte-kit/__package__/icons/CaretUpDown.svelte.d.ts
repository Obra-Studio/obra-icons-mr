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
export type CaretUpDownProps = typeof __propDef.props;
export type CaretUpDownEvents = typeof __propDef.events;
export type CaretUpDownSlots = typeof __propDef.slots;
export default class CaretUpDown extends SvelteComponentTyped<CaretUpDownProps, CaretUpDownEvents, CaretUpDownSlots> {
}
export {};
