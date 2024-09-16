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
export type CaretLeftRightFillProps = typeof __propDef.props;
export type CaretLeftRightFillEvents = typeof __propDef.events;
export type CaretLeftRightFillSlots = typeof __propDef.slots;
export default class CaretLeftRightFill extends SvelteComponentTyped<CaretLeftRightFillProps, CaretLeftRightFillEvents, CaretLeftRightFillSlots> {
}
export {};
