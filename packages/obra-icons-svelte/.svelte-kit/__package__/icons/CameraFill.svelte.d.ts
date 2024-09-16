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
export type CameraFillProps = typeof __propDef.props;
export type CameraFillEvents = typeof __propDef.events;
export type CameraFillSlots = typeof __propDef.slots;
export default class CameraFill extends SvelteComponentTyped<CameraFillProps, CameraFillEvents, CameraFillSlots> {
}
export {};
