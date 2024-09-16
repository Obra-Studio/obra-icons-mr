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
export type CaretUpProps = typeof __propDef.props;
export type CaretUpEvents = typeof __propDef.events;
export type CaretUpSlots = typeof __propDef.slots;
export default class CaretUp extends SvelteComponentTyped<CaretUpProps, CaretUpEvents, CaretUpSlots> {
}
export {};
