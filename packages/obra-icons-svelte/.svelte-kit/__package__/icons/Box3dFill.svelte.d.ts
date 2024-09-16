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
export type Box3dFillProps = typeof __propDef.props;
export type Box3dFillEvents = typeof __propDef.events;
export type Box3dFillSlots = typeof __propDef.slots;
export default class Box3dFill extends SvelteComponentTyped<Box3dFillProps, Box3dFillEvents, Box3dFillSlots> {
}
export {};
