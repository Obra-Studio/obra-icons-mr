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
export type RemoveBackgroundProps = typeof __propDef.props;
export type RemoveBackgroundEvents = typeof __propDef.events;
export type RemoveBackgroundSlots = typeof __propDef.slots;
export default class RemoveBackground extends SvelteComponentTyped<RemoveBackgroundProps, RemoveBackgroundEvents, RemoveBackgroundSlots> {
}
export {};
