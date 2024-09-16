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
export type FaceLoveProps = typeof __propDef.props;
export type FaceLoveEvents = typeof __propDef.events;
export type FaceLoveSlots = typeof __propDef.slots;
export default class FaceLove extends SvelteComponentTyped<FaceLoveProps, FaceLoveEvents, FaceLoveSlots> {
}
export {};
