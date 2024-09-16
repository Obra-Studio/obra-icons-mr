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
export type CameraProps = typeof __propDef.props;
export type CameraEvents = typeof __propDef.events;
export type CameraSlots = typeof __propDef.slots;
export default class Camera extends SvelteComponentTyped<CameraProps, CameraEvents, CameraSlots> {
}
export {};
