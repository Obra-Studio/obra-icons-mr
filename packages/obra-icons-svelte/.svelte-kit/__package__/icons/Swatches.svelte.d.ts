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
export type SwatchesProps = typeof __propDef.props;
export type SwatchesEvents = typeof __propDef.events;
export type SwatchesSlots = typeof __propDef.slots;
export default class Swatches extends SvelteComponentTyped<SwatchesProps, SwatchesEvents, SwatchesSlots> {
}
export {};
