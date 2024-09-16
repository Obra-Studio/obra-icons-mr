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
export type HeadphonesProps = typeof __propDef.props;
export type HeadphonesEvents = typeof __propDef.events;
export type HeadphonesSlots = typeof __propDef.slots;
export default class Headphones extends SvelteComponentTyped<HeadphonesProps, HeadphonesEvents, HeadphonesSlots> {
}
export {};
