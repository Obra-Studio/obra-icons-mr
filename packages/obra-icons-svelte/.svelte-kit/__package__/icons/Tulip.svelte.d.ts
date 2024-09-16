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
export type TulipProps = typeof __propDef.props;
export type TulipEvents = typeof __propDef.events;
export type TulipSlots = typeof __propDef.slots;
export default class Tulip extends SvelteComponentTyped<TulipProps, TulipEvents, TulipSlots> {
}
export {};
