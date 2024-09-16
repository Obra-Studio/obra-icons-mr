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
export type CaretDownProps = typeof __propDef.props;
export type CaretDownEvents = typeof __propDef.events;
export type CaretDownSlots = typeof __propDef.slots;
export default class CaretDown extends SvelteComponentTyped<CaretDownProps, CaretDownEvents, CaretDownSlots> {
}
export {};
