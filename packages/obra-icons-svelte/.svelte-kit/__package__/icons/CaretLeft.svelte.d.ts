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
export type CaretLeftProps = typeof __propDef.props;
export type CaretLeftEvents = typeof __propDef.events;
export type CaretLeftSlots = typeof __propDef.slots;
export default class CaretLeft extends SvelteComponentTyped<CaretLeftProps, CaretLeftEvents, CaretLeftSlots> {
}
export {};
