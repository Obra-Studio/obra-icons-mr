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
export type WebcamProps = typeof __propDef.props;
export type WebcamEvents = typeof __propDef.events;
export type WebcamSlots = typeof __propDef.slots;
export default class Webcam extends SvelteComponentTyped<WebcamProps, WebcamEvents, WebcamSlots> {
}
export {};
