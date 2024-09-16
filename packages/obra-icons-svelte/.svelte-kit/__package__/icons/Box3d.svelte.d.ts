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
export type Box3dProps = typeof __propDef.props;
export type Box3dEvents = typeof __propDef.events;
export type Box3dSlots = typeof __propDef.slots;
export default class Box3d extends SvelteComponentTyped<Box3dProps, Box3dEvents, Box3dSlots> {
}
export {};
