import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CaretUpDownFillProps = typeof __propDef.props;
export type CaretUpDownFillEvents = typeof __propDef.events;
export type CaretUpDownFillSlots = typeof __propDef.slots;
export default class CaretUpDownFill extends SvelteComponentTyped<CaretUpDownFillProps, CaretUpDownFillEvents, CaretUpDownFillSlots> {
}
export {};
