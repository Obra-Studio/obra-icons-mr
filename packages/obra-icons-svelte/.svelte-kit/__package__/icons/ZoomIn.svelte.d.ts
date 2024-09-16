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
export type ZoomInProps = typeof __propDef.props;
export type ZoomInEvents = typeof __propDef.events;
export type ZoomInSlots = typeof __propDef.slots;
export default class ZoomIn extends SvelteComponentTyped<ZoomInProps, ZoomInEvents, ZoomInSlots> {
}
export {};
