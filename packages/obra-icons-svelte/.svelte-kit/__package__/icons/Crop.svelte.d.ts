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
export type CropProps = typeof __propDef.props;
export type CropEvents = typeof __propDef.events;
export type CropSlots = typeof __propDef.slots;
export default class Crop extends SvelteComponentTyped<CropProps, CropEvents, CropSlots> {
}
export {};
