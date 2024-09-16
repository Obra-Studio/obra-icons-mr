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
export type CaretLeftFillProps = typeof __propDef.props;
export type CaretLeftFillEvents = typeof __propDef.events;
export type CaretLeftFillSlots = typeof __propDef.slots;
export default class CaretLeftFill extends SvelteComponentTyped<CaretLeftFillProps, CaretLeftFillEvents, CaretLeftFillSlots> {
}
export {};
