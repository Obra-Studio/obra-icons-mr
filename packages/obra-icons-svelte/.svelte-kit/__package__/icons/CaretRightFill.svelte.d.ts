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
export type CaretRightFillProps = typeof __propDef.props;
export type CaretRightFillEvents = typeof __propDef.events;
export type CaretRightFillSlots = typeof __propDef.slots;
export default class CaretRightFill extends SvelteComponentTyped<CaretRightFillProps, CaretRightFillEvents, CaretRightFillSlots> {
}
export {};
