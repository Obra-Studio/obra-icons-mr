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
export type VideoCameraProps = typeof __propDef.props;
export type VideoCameraEvents = typeof __propDef.events;
export type VideoCameraSlots = typeof __propDef.slots;
export default class VideoCamera extends SvelteComponentTyped<VideoCameraProps, VideoCameraEvents, VideoCameraSlots> {
}
export {};
