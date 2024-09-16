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
export type WebcamFillProps = typeof __propDef.props;
export type WebcamFillEvents = typeof __propDef.events;
export type WebcamFillSlots = typeof __propDef.slots;
export default class WebcamFill extends SvelteComponentTyped<WebcamFillProps, WebcamFillEvents, WebcamFillSlots> {
}
export {};
