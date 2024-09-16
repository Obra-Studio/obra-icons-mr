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
export type CaretDownFillProps = typeof __propDef.props;
export type CaretDownFillEvents = typeof __propDef.events;
export type CaretDownFillSlots = typeof __propDef.slots;
export default class CaretDownFill extends SvelteComponentTyped<CaretDownFillProps, CaretDownFillEvents, CaretDownFillSlots> {
}
export {};
