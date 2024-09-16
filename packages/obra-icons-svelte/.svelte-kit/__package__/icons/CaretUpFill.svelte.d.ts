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
export type CaretUpFillProps = typeof __propDef.props;
export type CaretUpFillEvents = typeof __propDef.events;
export type CaretUpFillSlots = typeof __propDef.slots;
export default class CaretUpFill extends SvelteComponentTyped<CaretUpFillProps, CaretUpFillEvents, CaretUpFillSlots> {
}
export {};
